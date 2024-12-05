#!/bin/bash

YAML_DIR="k8s"

# Запуск деплоя
install() {
  # Убедимся, что все нужные YAML-файлы существуют
  REQUIRED_FILES=(
    "$YAML_DIR/frontend-deployment.yaml"
    "$YAML_DIR/frontend-service.yaml"
    "$YAML_DIR/backend-deployment.yaml"
    "$YAML_DIR/backend-service.yaml"
    "$YAML_DIR/pipe-ingress.yaml"
  )

  for file in "${REQUIRED_FILES[@]}"; do
    if [ ! -f "$file" ]; then
      echo "Ошибка: Не найден файл $file. Пожалуйста, проверьте наличие всех необходимых файлов."
      exit 1
    fi
  done

  minikube start --container-runtime=containerd

  ./bin/update_hosts.sh

  helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
  helm repo update
  helm install ingress-nginx ingress-nginx/ingress-nginx \
    --namespace ingress-nginx \
    --create-namespace \
    --set controller.hostNetwork=true \
    --set controller.service.type=ClusterIP \
    --set controller.admissionWebhooks.enabled=false

  # Применяем файлы для бэкенда
  echo "Deploying backend on Kubernetes..."
  kubectl apply -f "$YAML_DIR/backend-deployment.yaml"
  kubectl apply -f "$YAML_DIR/backend-service.yaml"

  # Ждём, пока бэкенд станет доступен
  echo "Waiting for backend service to be ready..."
  kubectl wait --for=condition=available --timeout=120s deployment/backend-deployment

  # Применяем файлы для фронтенда
  echo "Deploying frontend on Kubernetes..."
  kubectl apply -f "$YAML_DIR/frontend-deployment.yaml"
  kubectl apply -f "$YAML_DIR/frontend-service.yaml"

  # Проверка готовности фронтенда
  echo "Waiting for frontend service to be ready..."
  kubectl wait --for=condition=available --timeout=120s deployment/frontend-deployment

  # Применяем Ingress
  echo "Deploying Ingress on Kubernetes..."
  kubectl apply -f "$YAML_DIR/pipe-ingress.yaml"

  # Проверяем статус Ingress
  echo "Waiting for Ingress to be ready..."
  kubectl get ingress

  echo "All components have been successfully deployed!"

  # Проверяем статус подов
  echo "Checking pod status..."
  kubectl get pods

  echo "Ready!"
}

# Ставим db
start_db() {
  REQUIRED_FILES=(
    "$YAML_DIR/postgres-config.yaml"
    "$YAML_DIR/postgres-pv.yaml"
    "$YAML_DIR/postgres-deployment.yaml"
    "$YAML_DIR/postgres-service.yaml"
  )

  for file in "${REQUIRED_FILES[@]}"; do
    if [ ! -f "$file" ]; then
      echo "Ошибка: Не найден файл $file. Пожалуйста, проверьте наличие всех необходимых файлов."
      exit 1
    fi
  done

  minikube start --container-runtime=containerd

  echo "Start db installation..."
  kubectl apply -f "$YAML_DIR/postgres-config.yaml"
  kubectl apply -f "$YAML_DIR/postgres-pv.yaml"
  kubectl apply -f "$YAML_DIR/postgres-deployment.yaml"
  kubectl apply -f "$YAML_DIR/postgres-service.yaml"

  echo "Ready!"
}

# Проверяем, какой аргумент передан в скрипт
if [ "$1" == "install" ]; then
  install
elif [ "$1" == "start_db" ]; then
  start_db
else
  echo "Ошибка: Неизвестная команда. Используйте 'install' или 'start_db'."
  exit 1
fi
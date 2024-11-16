#!/bin/bash

# Убедимся, что все нужные YAML-файлы существуют
YAML_DIR="k8s"
# REQUIRED_FILES=("$YAML_DIR/frontend-deployment.yaml" "$YAML_DIR/frontend-service.yaml")
REQUIRED_FILES=("$YAML_DIR/backend-deployment.yaml" "$YAML_DIR/backend-service.yaml")

for file in "${REQUIRED_FILES[@]}"; do
  if [ ! -f "$file" ]; then
    echo "Ошибка: Не найден файл $file. Пожалуйста, проверьте наличие всех необходимых файлов."
    exit 1
  fi
done

# запускаем
minikube start --container-runtime=containerd

# Применяем все файлы кластера Kubernetes
echo "Deploying on Kubernetes..."

for file in "${REQUIRED_FILES[@]}"; do
  echo "Apply $file..."
  kubectl apply -f "$file"
done

echo "All components have been successfully deployed!"

# Проверяем статус подов
echo "Checking pod status..."
kubectl get pods

echo "Ready!"
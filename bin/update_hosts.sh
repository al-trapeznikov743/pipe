#!/bin/bash

# Получение IP Minikube
MINIKUBE_IP=$(minikube ip)
if [ -z "$MINIKUBE_IP" ]; then
  echo "Ошибка: Не удалось получить IP Minikube. Убедитесь, что Minikube запущен."
  exit 1
fi

HOSTS_FILE="/etc/hosts"
DOMAIN="pipe.local"

# Удаление старой записи для pipe.local, если она есть
if grep -q "$DOMAIN" "$HOSTS_FILE"; then
  echo "Удаление старой записи для $DOMAIN из $HOSTS_FILE..."
  sudo sed -i.bak "/$DOMAIN/d" "$HOSTS_FILE"
fi

# Добавление новой записи
echo "Добавление новой записи для $DOMAIN..."
echo "$MINIKUBE_IP $DOMAIN" | sudo tee -a "$HOSTS_FILE" > /dev/null

# Вывод результата
echo "Запись для $DOMAIN успешно добавлена в $HOSTS_FILE:"
grep "$DOMAIN" "$HOSTS_FILE"
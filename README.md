pipe



Зависимости в системе

helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

# это выполняется в скриптом deploy.sh (если ingress не установлен в кластер)
helm install ingress-nginx ingress-nginx/ingress-nginx


echo "127.0.0.1 myapp.local" | sudo tee -a /etc/hosts > /dev/null
или
sudo sh -c 'echo "127.0.0.1 myapp.local" >> /etc/hosts'



docker login

# обновление образа локально
docker build -t myusername/myapp:latest . - пересобрать образ (локально);

# обновление образа в docker hub
docker push myusername/myapp:latest - пуш обновленного (или нового) образа;

kubectl exec -it pod_name -- /bin/sh - зайти в консоль пода;

ПРОБЛЕМЫ:

npm cache clean --force - чистка кэша npm;
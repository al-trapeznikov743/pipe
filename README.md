pipe

docker login

docker build -t myusername/myapp:latest . - пересобрать образ (локально);

docker push myusername/myapp:latest - пуш обновленного (или нового) образа;

kubectl exec -it pod_name -- /bin/sh - зайти в консоль пода;

ПРОБЛЕМЫ:

npm cache clean --force - чистка кэша npm;
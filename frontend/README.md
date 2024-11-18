minikube start --container-runtime=containerd

kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml

minikube service frontend-service

kubectl get pods
kubectl get svc

проброс порта (nodePort не работает)

https://qna.habr.com/q/1252328
https://github.com/kubernetes/minikube/issues/11193#issuecomment-826331511

kubectl port-forward pod/pod-name 8080:80

- kubectl delete all -A --all - удалить ВСЁ! -- удаляет все объекты (all), во всех пространствах имён (-A), со всеми именами (--all);


Если что-то не работает - попробуй пересоздать сервис

kubectl delete service frontend-service
kubectl apply -f frontend-service.yaml

а иногда помогает полная перезагрузка Minikube

minikube stop
minikube delete
minikube start
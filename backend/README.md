kubectl port-forward svc/backend-service 5000:80

npx prisma migrate dev --name userInit
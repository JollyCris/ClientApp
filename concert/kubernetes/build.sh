cd ..
ng build -prod -aot
docker rmi registry.apos.in/ankit/concert-angular concert-angular
docker build -t concert-angular .
docker tag concert-angular registry.apos.in/ankit/concert-angular
docker push registry.apos.in/ankit/concert-angular
cd kubernetes
kubectl delete -f application.yaml
sleep 20
kubectl create -f application.yaml

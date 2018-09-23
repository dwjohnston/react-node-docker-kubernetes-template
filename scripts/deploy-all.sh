#!/usr/bin/env bash

kubectl create -f yaml/api-deploy.yaml
kubectl create -f yaml/frontend-deploy.yaml

kubectl create -f yaml/api-service.yaml
kubectl create -f yaml/frontend-service.yaml

kubectl create -f yaml/ingress.yaml


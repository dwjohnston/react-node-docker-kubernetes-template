# react-node-docker-kubernetes-template

This is a boilerplate template for running a React frontend and Express API application on a kubernetes cluster.

## Details

The React frontend (create-react-app) is compiled and runs off and `nginx:alpine` image.

The backend is a `node:alpine` image.

## Development usage

### With API in development.

I recommend opening two terminal windows - one for the backend, one for the frontend.

In development, you have two options for wiring this together.

#### Run API without docker

This is a good option to use if you are actively making changes on the API and the frontend.

In `backend/` just run `npm start` - this will start nodemon running the application on port `3001`.

In `frontend/` run `npm start`. Requests to `/api` are proxied to `localhost:3001/api`.

#### Run API on kubernetes cluster, and proxy localhost to it.

**to do**

use `kubectl port-forward` to do this.

### Against a static api (ie. testing or production)

This is a good option to use if you making changes to just the frontend, and need to use some liveish API data.

## Running on Minikube

Look into each of the scripts folders to see what they do.

**todo** add kubernetes and minikube installation instructions

### Starting Minikube:

```
./scripts/start-minikube.sh
```

### Building images

```
./scripts/build-all.sh
```

### Deploying to cluster

```
./scripts/deploy-all.sh
```

### Hack your host file:

I don't quite like this step - and this is only necessary if you're going down the ingress route. Which is what we're doing here.

```
echo "$(minikube ip) template.example.com" | sudo tee -a /etc/hosts
```

## Converting this template for your own project usage

- Replace docker image tag names from `template/` to `[yourprojectname]/`.
- Replace yaml app names from `template` to `[yourprojectname]`
- Change the hosts name in the ingress.yaml to whatever you want. And change the host file to match.

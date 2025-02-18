# Todo-list App pour demo

Ce projet consiste à créer une application todo list en mode CRUD (création, lecture, mise à jour, suppression).

## Infrastructure

- Front-end : Vue.js & Boostrap pour une interface dynamique et responsive.
- Back-end : NetJS
- Authentication : connection via JWT
- Base de données : PostgreSQL
- Extra : Docker pour containeriser l’application et faciliter son déploiement.

## Git

Branches `main` pour le serveur de production et branches `feature/*` pour les développements

## Déploiement

```shell
docker compose up -d
```

Cette commande va lancer les containers nécessaires au Front et Back de l'application. Le Front est disponible sur `http://localhost:8080`, le back sur `http://localhost:3000` et la DB est accessible en interne avec la commande `docker exec -it libheros-db-1 psql -U postgres -d libheros_todo`

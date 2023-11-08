# Stage 1 - Build
FROM alpine:3.15 as builder

# Mise à jour des paquets et installation de Node.js et npm
RUN apk update && apk add --no-cache nodejs npm

WORKDIR /app

# Copie du fichier package.json pour installer les dépendances
COPY package.json .
# Installation des dépendances de production
RUN npm install --production
# Copie de tous les fichiers source dans le répertoire de travail
COPY . .
# Exécution du script de build défini dans le package.jso
RUN npm run build

# Stage 2 - Run
FROM alpine:3.15
# Mise à jour des paquets et installation de Node.js et npm
RUN apk update && apk add --no-cache nodejs npm

WORKDIR /app
# Copie des fichiers distribuables depuis le premier stage vers le répertoire de travail
COPY --from=builder /app/dist ./dist
# Installation des dépendances spécifiques à l'exécution
RUN npm install express systeminformation --production

CMD ["node", "dist/index.js"]

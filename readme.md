# Conway's Game of Life

Ce projet implémente le célèbre "Jeu de la vie" de Conway en utilisant HTML, CSS et JavaScript. Le jeu de la vie est un automate cellulaire qui évolue au fil des générations en fonction de règles simples.

## Fonctionnalités

- Création et affichage d'une grille de jeu.
- Possibilité de cliquer sur les cellules pour les faire naître ou mourir.
- Possibilité de dessiner directement sur la grille en cliquant et en maintenant le bouton enfoncé, plutôt que de   cliquer cellule par cellule.
- Contrôle de la vitesse du jeu avec un curseur.
- Bouton "Start/Pause" pour lancer ou arrêter l'automate.
- Bouton "Reload" pour réinitialiser le jeu.
- Affichage du nombre de générations et de la population actuelle.

## Comment utiliser

1. Cloner le dépôt Git ou télécharger le code source.

    git clone https://github.com/gueyos/game-of-life.git

2. Ouvrir le fichier `index.html` dans un navigateur web.

3. La grille de jeu sera affichée, avec des cellules mortes au départ.

4. Cliquer sur les cellules pour les faire naître ou mourir.

5. Utiliser le bouton "Start/Pause" pour lancer ou arrêter l'automate.

6. Utiliser le bouton "Reload" pour réinitialiser le jeu.

## Comment fonctionne le code

Le code est regroupé dans un fichier `script.js` qui est divisé en trois sections principales.

### `initializeGrid`

Cette fonction initialise la grille de jeu. Elle crée la structure HTML de la grille et ajoute des gestionnaires d'événements pour permettre à l'utilisateur de cliquer sur les cellules et de les faire naître ou mourir.

### `updateGrid` et `countLiveNeighbors`

Les fonctions `updateGrid` et `countLiveNeighbors` sont responsables de mettre à jour l'état de la grille en fonction des règles du jeu de la vie. `countLiveNeighbors` compte le nombre de voisins vivants d'une cellule donnée, et `updateGrid` applique ces règles pour chaque cellule de la grille.

### `startGame`, `play`, `stop`

Les fonctions `startGame`, `play`, et `stop` gèrent le démarrage du jeu, le lancement continu des générations, et l'arrêt du jeu respectivement. Ces fonctions sont déclenchées par l'interaction de l'utilisateur avec les boutons "Start/Pause" et "Reload".

### `updateUI`

La fonction `updateUI` met à jour l'interface utilisateur en fonction de l'état actuel de la grille. Elle parcourt chaque cellule de la grille, ajuste les classes CSS pour refléter si une cellule est vivante ou morte, et met à jour les générations et la population affichées à l'écran.

Le fichier `script.js` rassemble ces différentes parties du code et assure leur exécution en réponse aux interactions de l'utilisateur.

## Exemple d'utilisation

1. Cliquer sur une cellule pour la faire naître ou mourir.
2. Appuyer sur le bouton "Start" pour lancer l'automate.
3. Observer l'évolution des générations et de la population.
4. Appuyer sur le bouton "Pause" pour arrêter l'automate.
5. Utiliser le bouton "Reload" pour réinitialiser le jeu.
# game-of-life

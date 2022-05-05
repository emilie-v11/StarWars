# AssessFirst Dev Test

## Instructions

Le test consiste à installer le framework JS de ton choix et d'exploiter une API REST dans le but d'afficher les résultats

Pour cela il faudra : 

- Cloner le repo https://github.com/jbcomte35/assessfirst-dev-front-test
- Créer une branche spécifique pour l’entretien

- Lire le fichier README.md

- Lire la documentation de l'API Rest Starwars : https://swapi.dev/documentation

- Lire le PDF template.pdf présentant les 2 écrans à réaliser

- Installer le framework JS de ton choix (VueJS OU ReactJS)

- Utiliser un router pour créer 2 routes :
   + **Index** :
        - Liste des personnages via le endpoint https://swapi.dev/api/people avec un système de pagination avec 10 éléments par page
        - Au clic sur un élément de la liste, redirection vers la page de détail de l'élément
    
   + **Détail** :
        - Affichage des détails d'un personnage

- Le test doit utiliser : 
   + Bootstrap ou tout autre UI Kit pour mettre en place une interface claire et efficace sans perdre de temps sur le sujet
   + Un store pour stocker les informations des personnages
   + Un router pour la navigation (avec changement de l'url state pour le détail, cf template.pdf)
   + Axios pour les requêtes HTTP

- En fin de test, ouvrir une pull request de la branche spécifique pour l’entretien vers la branche Master

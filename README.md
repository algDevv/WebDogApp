Documentation de WebIndustry
1. Description du Projet

WebIndustry est une application React permettant aux utilisateurs de rechercher des images de chiens par race. Les utilisateurs peuvent entrer le nom d'une race de chien et obtenir des images aléatoires de cette race. Le site gère les erreurs telles que les noms de races invalides et affiche des messages d'erreur appropriés.
2. Fonctionnalités

    Recherche par Race : Les utilisateurs peuvent entrer le nom d'une race de chien pour rechercher des images associées.
    Affichage d'Images : Les images des races de chiens sont affichées dans un composant dédié.
    Gestion des Erreurs : Des messages d'erreur sont affichés lorsque la race n'existe pas ou lorsqu'il y a des problèmes avec la récupération des données.
    Indicateur de Chargement : Un message de chargement est affiché pendant que les images sont récupérées.

3 Composants Principaux

    Pages : 
      - Home
      - Gallery
      - Breed

    SearchBreed : Composant principal de recherche qui gère la recherche par race, l'affichage des images et la gestion des erreurs.
        État :
            breed : Nom de la race de chien recherché.
            images : Tableau des images obtenues pour la race spécifiée.
            error : Message d'erreur en cas de problème.
            loading : Indicateur de chargement.
        Méthodes :
            handleSearch : Gère la recherche des images en faisant une requête à l'API et met à jour les états en conséquence.

3.2 Gestion des Erreurs

    Erreur de Race Non Trouvée : Si la race de chien n'existe pas, un message d'erreur "Oups, le nom de cette race n'existe pas." est affiché.
    Erreur de Récupération des Images : Si un problème survient lors de la récupération des images, un message d'erreur générique est affiché.

3.3 API Utilisée

    URL de Base : https://dog.ceo/api/
    Endpoints :
        Liste des Races : https://dog.ceo/api/breeds/list/all
        Images par Race : https://dog.ceo/api/breed/{breed}/images/random/{numImages}
        Image au hasard : https://dog.ceo/api/breeds/image/random

3.4 Exemple d'Utilisation

    Saisie de la Race : L'utilisateur entre le nom d'une race dans le champ de recherche.
    Recherche des Images : L'utilisateur clique sur le bouton de recherche.
    Affichage des Résultats : Les images de la race spécifiée sont affichées. En cas d'erreur, un message d'erreur approprié est affiché.

4. Installation et Exécution

    Cloner le Repository : https://github.com/algDevv/WebDogApp.git


git clone https://github.com/algDevv/WebDogApp.git
cd votre-repository

Installer les Dépendances :



npm install

Démarrer le Serveur de Développement :

npm run dev

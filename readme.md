# Gestionnaire Football Ultimate Team (FUT)

Une application web pour la gestion d'équipes de football inspirée du mode *Ultimate Team* de FIFA. Cette application permet aux utilisateurs de créer et de gérer des équipes, de visualiser les joueurs sur un terrain de football, et de gérer les statistiques de chaque joueur dans un format simple et interactif.

## Fonctionnalités

### 1. Gestion du Terrain (Page 1)
- **Visualisation interactive du terrain** : Affiche un terrain de football avec la formation 4-4-2 par défaut.
- **Gestion des positions des joueurs** : Utilisation d'un système de glisser-déposer pour organiser les joueurs sur le terrain.
- **Statistiques détaillées des joueurs** :
  - Pour les joueurs de champ : Vitesse, Tir, Passe, Dribble, Défense, Physique.
  - Pour les gardiens : Plongeon, Prise de balle, Dégagement, Réflexes, Vitesse, Placement.
- **Interface responsive** : Compatible avec les écrans desktop et mobiles pour une utilisation fluide sur tous les appareils.

### 2. Gestion des Joueurs (Page 2)
- **Cartes détaillées des joueurs** : Chaque joueur est représenté par une carte contenant :
  - Photo du joueur
  - Informations personnelles (nom, nationalité avec drapeau)
  - Club et logo du club
  - Position et note globale
  - Statistiques détaillées selon la position du joueur
- **Système de filtrage** : Permet de filtrer les joueurs par position (ex : attaquant, défenseur, gardien, etc.).
- **Sélection d'équipe** : 
  - Limite de 11 joueurs par équipe.
  - Vérification automatique des doublons (un joueur ne peut être ajouté qu’une seule fois).
  - Visualisation des joueurs sélectionnés.
  - Fonction de suppression et de rafraîchissement de la sélection.

### 3. Système de Stockage
- **Sauvegarde locale des joueurs sélectionnés** : Utilisation de l'API `LocalStorage` pour persister les données entre les sessions.
- **Persistance des données** : Les données des joueurs sélectionnés restent disponibles même après la fermeture du navigateur.
- **Synchronisation en temps réel** : Les modifications effectuées dans les pages de gestion du terrain et des joueurs sont synchronisées automatiquement.

## Stack Technique

- **HTML5** : Structure du contenu.
- **JavaScript (Vanilla)** : Logique et interactivité du projet.
- **Tailwind CSS** : Framework CSS pour la création d'une interface utilisateur réactive et moderne.
- **LocalStorage API** : Utilisée pour la persistance des données entre les sessions.

## Structure du Projet

``` bash
├── index.html # Page de gestion des joueurs
├── views/ 
│ └──  field.html # Page du terrain
├── js/ 
│ ├── field.js # Logique du terrain 
│ └── readData.js # Logique de gestion des joueurs 
└── README.md
```

## Instructions d'Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/AHLALLAY/FUT-Champions

2. Ouvrir index.html ou players.html dans un navigateur web moderne.
   - Aucun processus de build requis.
   - Le projet utilise un CDN pour charger Tailwind CSS.

## Format des Données Joueurs
Chaque joueur est représenté par un objet avec les propriétés suivantes :
```javascript
{
    name: "Nom du joueur",
    photo: "URL de la photo du joueur",
    nationality: "Nationalité du joueur",
    flag: "Code du drapeau de la nationalité",
    club: "Nom du club",
    logo: "URL du logo du club",
    position: "Position du joueur",
    rating: 85, // Note globale du joueur
    stats: {
        // Statistiques spécifiques en fonction de la position
        speed: 85,
        shooting: 90,
        passing: 80,
        dribbling: 88,
        defense: 70,
        physical: 75
    }
}
```

Les statistiques spécifiques aux gardiens seront légèrement différentes, par exemple :
```javascript
stats: {
    diving: 85,
    handling: 80,
    kicking: 75,
    reflexes: 90,
    speed: 70,
    positioning: 85
}
```
## Utilisation
### Page Terrain
 - **Visualisation et positionnement des joueurs** : Les joueurs peuvent être déplacés sur le terrain grâce à un système de glisser-déposer pour former une équipe.
- **Personnalisation de la formation** : Actuellement, la formation par défaut est 4-4-2, mais d'autres formations peuvent être ajoutées à l'avenir.
Page Joueurs
- **Filtrage des joueurs** : Sélectionner des joueurs en filtrant par position.
- **Sélection jusqu'à 11 joueurs** : Ajouter des joueurs à l'équipe, avec une vérification des doublons.
- **Visualisation et gestion des joueurs sélectionnés** : Voir les joueurs actuellement dans l'équipe et les supprimer si nécessaire.
- 
## Compatibilité Navigateur
- **Navigateurs compatibles** : Compatible avec les navigateurs modernes tels que Chrome, Firefox, Safari et Edge.
- **JavaScript** : Nécessite JavaScript activé.
- **Responsive Design** : L'interface est entièrement responsive pour s'adapter aux écrans desktop et mobiles.

## Améliorations Futures
- **Options de formations supplémentaires** : Ajout de formations alternatives à 4-4-2.
- **Calcul de la chimie d'équipe** : Implémentation d'un système pour calculer la chimie de l'équipe en fonction des joueurs sélectionnés.
- **Système de recherche avancée** : Recherche des joueurs par critères détaillés (ex : nationalité, club, position).
- **Statistiques d'équipe** : Ajout de statistiques globales pour l'équipe entière.
- **Import/Export des compositions** : Permettre l'importation et l'exportation des équipes sous différents formats.
- **Personnalisation des tactiques** : Ajout d'options pour personnaliser les tactiques de l'équipe (par exemple, défense solide, jeu offensif).

## Contribution
Le projet est actuellement en développement. Si vous souhaitez contribuer :

1. Forkez le dépôt.
2. Créez une branche pour votre fonctionnalité (git checkout -b feature/ma-fonctionnalite).
3. Soumettez une pull request avec une description claire des modifications.

Merci de contribuer et d'utiliser ce projet !

```
### Points clés :
1. **Introduction améliorée** : Explication claire du but du projet et des fonctionnalités principales.
2. **Structure améliorée** : Meilleure organisation avec des sections claires et une hiérarchisation des fonctionnalités.
3. **Exemples de données** : Les exemples sont détaillés et montrent des scénarios différents (joueurs de champ et gardiens).
4. **Instructions détaillées** : L'installation et l'utilisation sont expliquées de manière claire.
5. **Améliorations futures** : Plus d'idées pour les fonctionnalités à venir, ce qui montre la vision à long terme du projet.
6. **Contributions** : Guide de contribution pour encourager la collaboration.
```
Il vous suffit de copier ce contenu dans votre fichier `README.md`.

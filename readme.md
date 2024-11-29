# FUT Team Builder

Application web interactive pour la création et la gestion d'équipes Ultimate Team avec gestion dynamique des joueurs et calcul de la chimie d'équipe.

## Fonctionnalités

### Fonctionnalités Principales
- Gestion dynamique des joueurs avec positionnement selon formation (4-4-2, 4-3-3)
- Cartes de joueurs interactives avec statistiques
- Validation des positions selon la formation
- Validation en temps réel des formulaires
- Maximum 11 joueurs par formation

### Fonctionnalités Avancées
- Calcul de la chimie d'équipe basé sur :
  - Correspondance des positions
  - Liens de club
  - Compatibilité de championnat
  - Connexions de nationalité
- Stockage local des données
- Glisser-déposer des joueurs
- Changement dynamique de formation
- Design responsive

## Stack Technique

- HTML5
- JavaScript Vanilla (manipulation DOM)
- CSS/Framework CSS (Tailwind CSS ou Bootstrap)

## Calcul de la Chimie

Calcul par joueur :
- Position correcte : 10 points
- Lien de club : 3 points par connexion
- Lien de championnat : 2 points par joueur adjacent
- Lien de nationalité : 1 point par connexion

## Formations

### 4-3-3
- 1 GK
- 2 CB, 1 LB, 1 RB
- 3 CM
- 1 LW, 1 RW
- 1 ST

### 4-4-2
- 1 GK
- 2 CB, 1 LB, 1 RB
- 2 CM, 1 RM, 1 LM
- 2 ST

## Stockage Local

L'application sauvegarde :
- Formation actuelle
- Données et positions des joueurs
- Scores de chimie
- Joueurs remplaçants

## Design Responsive

- Adaptation laptop, tablette et mobile
- Ajustement dynamique des positions
- Éléments UI optimisés selon l'écran

## Installation

1. Cloner le dépôt
2. Ouvrir index.html dans un navigateur
3. Aucune dépendance supplémentaire requise

## Directives de Développement

- Maintenir les règles de validation
- Respecter la limite de 11 joueurs
- Suivre les principes responsive
- Tester rigoureusement les calculs de chimie
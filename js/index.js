document.addEventListener('DOMContentLoaded', function () {
    // Références aux éléments du DOM
    const showPlayersBtn = document.querySelector('button.bg-blue-500');
    const newPlayerBtn = document.querySelector('button.bg-green-500');
    const playerModal = document.getElementById('playerModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const playerForm = document.getElementById('playerForm');
    const mainContent = document.querySelector('main .bg-white');
    

    // 2. Fonction pour dessiner un terrain de football
    function drawField() {
        // Créer un conteneur pour le terrain
        const fieldContainer = document.createElement('div');
        fieldContainer.classList.add(
            'relative', // position relative
            'w-full', // largeur 100%
            'h-[600px]', // hauteur de 600px
            'bg-green-500', // couleur de fond verte
            'border-2', // bordure de 2px
            'border-white', // couleur de la bordure blanche
            'rounded-lg' // coins arrondis
        );
    
        // Créer les lignes de terrain (cercle central)
        const centerCircle = document.createElement('div');
        centerCircle.classList.add(
            'absolute', // position absolue
            'top-1/2', // centré verticalement
            'left-1/2', // centré horizontalement
            '-translate-x-1/2', // centrer horizontalement
            '-translate-y-1/2', // centrer verticalement
            'rounded-full', // bordure arrondie pour un cercle
            'w-[180px]', // largeur du cercle
            'h-[180px]', // hauteur du cercle
            'border-2', // bordure de 2px
            'border-white' // bordure blanche
        );
        fieldContainer.appendChild(centerCircle);
    
        // Créer la ligne centrale
        const centerLine = document.createElement('div');
        centerLine.classList.add(
            'absolute', // position absolue
            'top-1/2', // centré verticalement
            'left-0', // à gauche
            'rotate-90', // rotation à 90 degrés
            'w-full', // largeur à 100%
            'h-[2px]', // hauteur de 2px
            'bg-white' // couleur de la ligne blanche
        );
        fieldContainer.appendChild(centerLine);
    
        // Créer les buts (simples rectangles)
        const goalLeft = document.createElement('div');
        goalLeft.classList.add(
            'absolute', // position absolue
            'left-0', // position à gauche
            'top-1/2', // centré verticalement
            '-translate-y-1/2', // centré verticalement
            'w-[60px]', // largeur de 60px
            'h-[150px]', // hauteur de 150px
            'bg-white' // couleur blanche
        );
    
        const goalRight = document.createElement('div');
        goalRight.classList.add(
            'absolute', // position absolue
            'right-0', // position à droite
            'top-1/2', // centré verticalement
            '-translate-y-1/2', // centré verticalement
            'w-[60px]', // largeur de 60px
            'h-[150px]', // hauteur de 150px
            'bg-white' // couleur blanche
        );
    
        fieldContainer.appendChild(goalLeft);
        fieldContainer.appendChild(goalRight);
    
        // Ajouter le terrain au contenu principal
        mainContent.appendChild(fieldContainer);
    }
    

    // 3. Ouvrir le modal d'ajout de joueur
    function openModal() {
        playerModal.classList.remove('hidden');
    }

    // 4. Fermer le modal d'ajout de joueur
    function closeModal() {
        playerModal.classList.add('hidden');
    }

    // 5. Ajouter un joueur (en utilisant les valeurs du formulaire)
    playerForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche l'envoi réel du formulaire

        // Récupérer les données du formulaire
        const playerName = document.getElementById('playerName').value;
        const shortName = document.getElementById('playerShortName').value;
        const overall = document.getElementById('overall').value;
        const position = document.getElementById('position').value;
        const age = document.getElementById('age').value;
        const nationality = document.getElementById('nationality').value;
        const club = document.getElementById('club').value;

        // Ajouter un joueur dans le tableau (ou envoyer les données au backend)
        console.log('Joueur ajouté:', { playerName, shortName, overall, position, age, nationality, club });

        // Fermer le modal après l'ajout
        closeModal();
    });

    // 6. Gestionnaire d'événements pour les boutons
    showPlayersBtn.addEventListener('click', showPlayers);  // Afficher les joueurs depuis le JSON
    newPlayerBtn.addEventListener('click', openModal);      // Ouvrir le modal pour ajouter un joueur
    cancelBtn.addEventListener('click', closeModal);        // Fermer le modal sans enregistrer

    // 7. Dessiner le terrain lors du chargement de la page
    drawField();
});

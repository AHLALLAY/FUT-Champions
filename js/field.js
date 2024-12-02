document.addEventListener('DOMContentLoaded', function () {
    const newPlayerBtn = document.getElementById('newPlayerBtn');
    const playerModal = document.getElementById('playerModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const playerForm = document.getElementById('playerForm');
    const mainContent = document.querySelector('main');
    const sidebarPlayerList = document.querySelector('aside div div:last-child');
    let currentEditingPlayer = null;

    function updateSidebarPlayers() {
        const players = JSON.parse(localStorage.getItem('players') || '[]');
        sidebarPlayerList.innerHTML = ''; // Clear existing content
        
        const title = document.createElement('h3');
        title.className = 'text-lg font-semibold text-white mb-3';
        title.textContent = 'Players List';
        sidebarPlayerList.appendChild(title);

        const playersList = document.createElement('div');
        playersList.className = 'space-y-2';
        
        players.forEach((player, index) => {
            const playerItem = document.createElement('div');
            playerItem.className = 'bg-gray-700 p-2 rounded-lg text-white text-sm flex justify-between items-center';
            playerItem.innerHTML = `
                <div>
                    <div class="font-medium">${player.playerName}</div>
                    <div class="text-gray-300 text-xs">
                        ${player.position} | OVR: ${player.overall}
                    </div>
                </div>
                <div class="flex space-x-2">
                    <button class="edit-btn bg-blue-500 px-2 py-1 rounded hover:bg-blue-600 transition-colors">
                        Edit
                    </button>
                    <button class="delete-btn bg-red-500 px-2 py-1 rounded hover:bg-red-600 transition-colors">
                        Delete
                    </button>
                </div>
            `;

            // Ajouter les gestionnaires d'événements pour édition/suppression
            playerItem.querySelector('.edit-btn').addEventListener('click', () => editPlayer(player));
            playerItem.querySelector('.delete-btn').addEventListener('click', () => deletePlayer(index));

            playersList.appendChild(playerItem);
        });
        
        sidebarPlayerList.appendChild(playersList);
    }

    
    function deletePlayer(index) {
        if (confirm('Are you sure you want to delete this player?')) {
            const players = JSON.parse(localStorage.getItem('players') || '[]');
            players.splice(index, 1);
            localStorage.setItem('players', JSON.stringify(players));
            updateSidebarPlayers();
            displayPlayers();
        }
    }

    function editPlayer(player) {
        currentEditingPlayer = player;
        // Remplir le formulaire avec les données du joueur
        document.getElementById('playerName').value = player.playerName;
        document.getElementById('playerShortName').value = player.shortName;
        document.getElementById('overall').value = player.overall;
        document.getElementById('position').value = player.position;
        document.getElementById('age').value = player.age;
        document.getElementById('nationality').value = player.nationality;
        document.getElementById('club').value = player.club;
        document.getElementById('pace').value = player.pace;
        document.getElementById('shooting').value = player.shooting;
        document.getElementById('passing').value = player.passing;
        document.getElementById('dribbling').value = player.dribbling;
        document.getElementById('defending').value = player.defending;
        document.getElementById('physicality').value = player.physicality;

        // Changer le texte du bouton submit
        const submitBtn = playerForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Update Player';
        
        openModal();
    }

    
    function savePlayer(playerData) {
        const players = JSON.parse(localStorage.getItem('players') || '[]');
        
        if (currentEditingPlayer) {
            // Mode édition : mettre à jour le joueur existant
            const index = players.findIndex(p => p.playerName === currentEditingPlayer.playerName);
            if (index !== -1) {
                players[index] = playerData;
            }
        } else {
            // Mode ajout : ajouter un nouveau joueur
            players.push(playerData);
        }
        
        localStorage.setItem('players', JSON.stringify(players));
        displayPlayers();
        updateSidebarPlayers();
    }

    
    function closeModal() {
        currentEditingPlayer = null;
        const submitBtn = playerForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Add Player';
        playerModal.classList.add('hidden');
        playerForm.reset();
    }

    function openModal() {
        playerModal.classList.remove('hidden');
    }

    function drawField() {
        const fieldContainer = document.createElement('div');
        fieldContainer.classList.add('relative','w-full','aspect-[3/4]','sm:aspect-[4/3]','max-h-[80vh]','bg-green-500','border-2','border-white','rounded-lg');

        // Cercle central
        const centerCircle = document.createElement('div');
        centerCircle.classList.add('absolute','top-1/2','left-1/2','-translate-x-1/2','-translate-y-1/2','rounded-full','w-[20%]','aspect-square','border-2','border-white');
        fieldContainer.appendChild(centerCircle);

        // Ligne centrale
        const centerLine = document.createElement('div');
        centerLine.classList.add('absolute','top-0','left-1/2','-translate-x-1/2','w-[2px]','h-full','bg-white');
        fieldContainer.appendChild(centerLine);

        // Buts
        const goalLeft = document.createElement('div');
        goalLeft.classList.add('absolute','left-0','top-1/2','-translate-y-1/2','w-[7%]','h-[25%]','bg-white');
        fieldContainer.appendChild(goalLeft);

        const goalRight = document.createElement('div');
        goalRight.classList.add('absolute','right-0','top-1/2','-translate-y-1/2','w-[7%]','h-[25%]','bg-white');
        fieldContainer.appendChild(goalRight);

        // Zones de pénalité
        const penaltyAreaLeft = document.createElement('div');
        penaltyAreaLeft.classList.add('absolute','left-0','top-1/2','-translate-y-1/2','w-[20%]','h-[45%]','border-2','border-white');
        fieldContainer.appendChild(penaltyAreaLeft);

        const penaltyAreaRight = document.createElement('div');
        penaltyAreaRight.classList.add('absolute','right-0','top-1/2','-translate-y-1/2','w-[20%]','h-[45%]','border-2','border-white');
        fieldContainer.appendChild(penaltyAreaRight);

        const fieldDiv = mainContent.querySelector('#field');
        fieldDiv.innerHTML = ''; // Clear existing content
        fieldDiv.appendChild(fieldContainer);
        displayPlayers();
    }

    function displayPlayers() {
        const players = JSON.parse(localStorage.getItem('players') || '[]');
        const fieldContainer = mainContent.querySelector('#field > div');
        
        // Remove existing players
        const existingPlayers = fieldContainer.querySelectorAll('.player-marker');
        existingPlayers.forEach(player => player.remove());

        // Define positions with percentages
        const positions = {
            'GK': { top: '50%', left: '5%' },
            'LB': { top: '20%', left: '20%' },
            'CB1': { top: '40%', left: '20%' },
            'CB2': { top: '60%', left: '20%' },
            'RB': { top: '80%', left: '20%' },
            'LM': { top: '20%', left: '40%' },
            'CM1': { top: '40%', left: '40%' },
            'CM2': { top: '60%', left: '40%' },
            'RM': { top: '80%', left: '40%' },
            'ST1': { top: '35%', left: '70%' },
            'ST2': { top: '65%', left: '70%' }
        };

        players.forEach(player => {
            const playerMarker = document.createElement('div');
            playerMarker.classList.add(
                'player-marker',
                'absolute',
                'w-12',
                'h-12',
                'bg-white',
                'rounded-full',
                'flex',
                'items-center',
                'justify-center',
                'text-sm',
                'font-bold',
                'cursor-pointer',
                'border-2',
                'border-blue-500'
            );

            const pos = positions[player.position];
            if (pos) {
                playerMarker.style.top = pos.top;
                playerMarker.style.left = pos.left;
                playerMarker.style.transform = 'translate(-50%, -50%)';
            }

            playerMarker.textContent = player.overall;
            playerMarker.title = `${player.playerName} (${player.position})`;

            playerMarker.addEventListener('click', () => {
                alert(`
                    Nom: ${player.playerName}
                    Position: ${player.position}
                    Overall: ${player.overall}
                    Age: ${player.age}
                    Club: ${player.club}
                    Nationalité: ${player.nationality}
                    
                    Stats:
                    Pace: ${player.pace}
                    Shooting: ${player.shooting}
                    Passing: ${player.passing}
                    Dribbling: ${player.dribbling}
                    Defending: ${player.defending}
                    Physicality: ${player.physicality}
                `);
            });

            fieldContainer.appendChild(playerMarker);
        });
    }

    // Event Listeners
    playerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const playerData = {
            playerName: document.getElementById('playerName').value,
            shortName: document.getElementById('playerShortName').value,
            overall: document.getElementById('overall').value,
            position: document.getElementById('position').value,
            age: document.getElementById('age').value,
            nationality: document.getElementById('nationality').value,
            club: document.getElementById('club').value,
            pace: document.getElementById('pace').value,
            shooting: document.getElementById('shooting').value,
            passing: document.getElementById('passing').value,
            dribbling: document.getElementById('dribbling').value,
            defending: document.getElementById('defending').value,
            physicality: document.getElementById('physicality').value
        };

        savePlayer(playerData);
        closeModal();
    });

    newPlayerBtn.addEventListener('click', () => {
        currentEditingPlayer = null;
        const submitBtn = playerForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Add Player';
        playerForm.reset();
        openModal();
    });
    
    cancelBtn.addEventListener('click', closeModal);

    // Initial setup
    drawField();
    updateSidebarPlayers();
});
document.addEventListener('DOMContentLoaded', () => {
    const newPlayerBtn = document.getElementById('newPlayerBtn');
    const field = document.getElementById('field');

    // Configuration des stats selon la position
    const statsConfig = {
        goalkeeper: [
            { label: 'Diving', icon: '🧤' },
            { label: 'Handling', icon: '✋' },
            { label: 'Kicking', icon: '👟' },
            { label: 'Reflexes', icon: '⚡' },
            { label: 'Speed', icon: '🏃' },
            { label: 'Positioning', icon: '👀' }
        ],
        fieldPlayer: [
            { label: 'Pace', icon: '⚡' },
            { label: 'Shooting', icon: '🎯' },
            { label: 'Passing', icon: '📊' },
            { label: 'Dribbling', icon: '⚽' },
            { label: 'Defending', icon: '🛡️' },
            { label: 'Physical', icon: '💪' }
        ]
    };

    // Fonction pour générer le HTML des stats
    function generateStatsHTML(playerPosition) {
        const stats = playerPosition.startsWith('GK') ? statsConfig.goalkeeper : statsConfig.fieldPlayer;

        return `
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                ${stats.map(stat => `
                    <div class="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-xl">${stat.icon}</span>
                            <div class="font-medium text-gray-700">${stat.label}</div>
                        </div>
                        <div class="relative">
                            <input 
                                type="number" 
                                id="${stat.label.toLowerCase()}" 
                                name="${stat.label.toLowerCase()}" 
                                min="1" 
                                max="99" 
                                required 
                                class="w-full p-2 text-sm border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                oninput="this.value = this.value > 99 ? 99 : Math.max(0, this.value)"
                            >
                            <span class="absolute right-2 top-2 text-xs text-gray-400">/99</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Gestion du localStorage
    function getStoredPlayers() {
        return JSON.parse(localStorage.getItem('players') || '[]');
    }

    function savePlayers(players) {
        localStorage.setItem('players', JSON.stringify(players));
    }

    // Initialisation du terrain
    function initializeField() {
        if (!field) return;

        // Style de base du terrain
        field.className = 'relative w-full aspect-[16/9] bg-green-600 rounded-lg m-4 overflow-hidden';

        // Définition des positions
        const positions = {
            'GK': { top: '85%', left: '50%' },
            'LB': { top: '70%', left: '20%' },
            'CB1': { top: '70%', left: '40%' },
            'CB2': { top: '70%', left: '60%' },
            'RB': { top: '70%', left: '80%' },
            'LW': { top: '45%', left: '20%' },
            'CM1': { top: '45%', left: '40%' },
            'CM2': { top: '45%', left: '60%' },
            'RW': { top: '45%', left: '80%' },
            'ST1': { top: '20%', left: '35%' },
            'ST2': { top: '20%', left: '65%' }
        };

        // Marquages du terrain
        field.innerHTML = `
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 border-2 border-white rounded-full"></div>
            <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div>
            <div class="absolute top-0 left-[15%] w-[70%] h-1/5 border-2 border-white"></div>
            <div class="absolute bottom-0 left-[15%] w-[70%] h-1/5 border-2 border-white"></div>
        `;

        // Création des positions des joueurs
        Object.entries(positions).forEach(([position, coords]) => {
            const playerSpot = document.createElement('div');
            playerSpot.id = position;
            playerSpot.style.top = coords.top;
            playerSpot.style.left = coords.left;
            playerSpot.className = `
                absolute -translate-x-1/2 -translate-y-1/2
                w-20 h-20
                bg-white/30 hover:bg-white/50
                border-2 border-white rounded-full
                flex items-center justify-center
                cursor-pointer transition-colors
                text-xs text-white font-bold
            `;

            playerSpot.innerHTML = position;
            field.appendChild(playerSpot);
        });

        updateFieldDisplay();
    }

    // Mise à jour de l'affichage du terrain
    function updateFieldDisplay() {
        const players = getStoredPlayers();

        players.forEach(player => {
            const spot = document.getElementById(player.position);
            if (spot) {
                spot.innerHTML = `
                    <div class="text-center">
                        <div class="text-xs font-bold">${player.name}</div>
                        <div class="text-xs">${player.position}</div>
                    </div>
                `;
            }
        });
    }

    // Gestionnaire du modal d'ajout de joueur
    function showAddPlayerModal() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';

        modal.innerHTML = `
            <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-gray-800">Add New Player</h2>
                        <button id="closeModalBtn" class="text-gray-400 hover:text-red-600">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>

                    <form id="playerForm" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="playerName" required 
                                    class="mt-1 w-full p-2 border rounded">
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Age</label>
                                <input type="number" id="playerAge" required min="16" max="45"
                                    class="mt-1 w-full p-2 border rounded">
                            </div>

                            <div class="md:col-span-2">
                                <label class="block text-sm font-medium text-gray-700">Position</label>
                                <select id="playerPosition" required 
                                    class="mt-1 w-full p-2 border rounded">
                                    <option value="">Select position...</option>
                                    <optgroup label="Goalkeeper">
                                        <option value="GK">Goalkeeper (GK)</option>
                                    </optgroup>
                                    <optgroup label="Defenders">
                                        <option value="LB">Left Back (LB)</option>
                                        <option value="CB1">Center Back 1 (CB1)</option>
                                        <option value="CB2">Center Back 2 (CB2)</option>
                                        <option value="RB">Right Back (RB)</option>
                                    </optgroup>
                                    <optgroup label="Midfielders">
                                        <option value="LW">Left Wing (LW)</option>
                                        <option value="CM1">Center Mid 1 (CM1)</option>
                                        <option value="CM2">Center Mid 2 (CM2)</option>
                                        <option value="RW">Right Wing (RW)</option>
                                    </optgroup>
                                    <optgroup label="Forwards">
                                        <option value="ST1">Striker 1 (ST1)</option>
                                        <option value="ST2">Striker 2 (ST2)</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>

                        <div id="statsContainer">
                            ${generateStatsHTML('Player')}
                        </div>

                        <div class="flex gap-4 pt-6">
                            <button type="submit" 
                                class="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
                                Add Player
                            </button>
                            <button type="button" id="cancelBtn"
                                class="px-6 py-2 border hover:bg-gray-50 rounded">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Event Listeners du modal
        const closeModalBtn = modal.querySelector('#closeModalBtn');
        const cancelBtn = modal.querySelector('#cancelBtn');
        const playerPosition = modal.querySelector('#playerPosition');
        const playerForm = modal.querySelector('#playerForm');

        const closeModal = () => modal.remove();

        closeModalBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Mise à jour des stats selon la position
        playerPosition.addEventListener('change', function () {
            const statsContainer = modal.querySelector('#statsContainer');
            statsContainer.innerHTML = generateStatsHTML(this.value);
        });

        // Soumission du formulaire
        playerForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validation des stats
            const statsInputs = modal.querySelectorAll('#statsContainer input[type="number"]');
            let isValid = true;

            statsInputs.forEach(input => {
                const value = parseInt(input.value);
                if (!value || value < 1 || value > 99) {
                    isValid = false;
                    input.classList.add('border-red-500');
                } else {
                    input.classList.remove('border-red-500');
                }
            });

            if (!isValid) {
                alert('All stats must be between 1 and 99');
                return;
            }

            // Création du joueur
            const newPlayer = {
                name: modal.querySelector('#playerName').value,
                age: parseInt(modal.querySelector('#playerAge').value),
                position: modal.querySelector('#playerPosition').value,
                stats: Array.from(statsInputs).reduce((acc, input) => {
                    acc[input.name] = parseInt(input.value);
                    return acc;
                }, {})
            };

            // Sauvegarde et mise à jour
            const players = getStoredPlayers();
            players.push(newPlayer);
            savePlayers(players);
            updateFieldDisplay();

            closeModal();
        });
    }

    // Initialisation
    newPlayerBtn.addEventListener('click', showAddPlayerModal);


    initializeField();
});
document.addEventListener('DOMContentLoaded', () => {
    const newPlayerBtn = document.getElementById('newPlayerBtn');
    const field = document.getElementById('field');

    // Function to generate stats input fields dynamically
    function generateStatsInputs(playerPosition) {
        const statsConfig = playerPosition.startsWith('GK') ? [
            { label: 'Diving', icon: '🧤' },
            { label: 'Handling', icon: '✋' },
            { label: 'Kicking', icon: '👟' },
            { label: 'Reflexes', icon: '⚡' },
            { label: 'Speed', icon: '🏃' },
            { label: 'Positioning', icon: '👀' }
        ] : [
            { label: 'Pace', icon: '⚡' },
            { label: 'Shooting', icon: '🎯' },
            { label: 'Passing', icon: '📊' },
            { label: 'Dribbling', icon: '⚽' },
            { label: 'Defending', icon: '🛡️' },
            { label: 'Physical', icon: '💪' }
        ];

        return statsConfig.map(stat => `
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
        `).join('');
    }

    // Retrieve the stored players from localStorage
    function getStoredPlayers() {
        return JSON.parse(localStorage.getItem('selectedPlayers') || '[]');
    }

    // Save players to localStorage
    function saveToLocalStorage(players) {
        localStorage.setItem('selectedPlayers', JSON.stringify(players));
    }

    // Initialize the field (football pitch)
    function initializeField() {
        if (!field) return; // Guard clause if field element doesn't exist

        // Set up the field's base style
        field.className = 'relative w-full aspect-[16/9] bg-green-600 rounded-lg m-4 overflow-hidden';

        // Position setup for a 4-4-2 formation
        const positions = {
            'GK1': { top: '85%', left: '50%' },
            'LB1': { top: '70%', left: '20%' },
            'CB1': { top: '70%', left: '40%' },
            'CB2': { top: '70%', left: '60%' },
            'RB1': { top: '70%', left: '80%' },
            'LW1': { top: '45%', left: '20%' },
            'CM1': { top: '45%', left: '40%' },
            'CM2': { top: '45%', left: '60%' },
            'RW1': { top: '45%', left: '80%' },
            'ST1': { top: '20%', left: '35%' },
            'ST2': { top: '20%', left: '65%' }
        };

        // Create the field marks and the player spots
        field.innerHTML = `
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 border-2 border-white rounded-full"></div>
            <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div>
            <div class="absolute top-0 left-[15%] w-[70%] h-1/5 border-2 border-white"></div>
            <div class="absolute bottom-0 left-[15%] w-[70%] h-1/5 border-2 border-white"></div>
        `;

        // Create the positions of the players on the field
        Object.entries(positions).forEach(([position, coords]) => {
            const playerSpot = document.createElement('div');
            playerSpot.id = position;
            playerSpot.style.top = coords.top;
            playerSpot.style.left = coords.left;
            playerSpot.innerHTML = position;
            playerSpot.className = `
                absolute -translate-x-1/2 -translate-y-1/2
                w-20 h-20
                bg-white/30 hover:bg-white/50
                border-2 border-white rounded-full
                flex items-center justify-center
                cursor-pointer transition-colors
                text-xs text-gray-700 font-bold
            `;

            field.appendChild(playerSpot);
        });

        // Update players initially and whenever storage changes
        updatePlayers();
        window.addEventListener('storage', updatePlayers);
    }

    // Update the displayed players from localStorage
    function updatePlayers() {
        // Récupère les joueurs stockés dans localStorage
        const players = getStoredPlayers();

        // Supprime les anciens joueurs du terrain
        const playerSpots = field.querySelectorAll('.player-spot');
        playerSpots.forEach(spot => spot.innerHTML = '');  // Vide chaque spot

        // Affiche les nouveaux joueurs
        players.forEach(player => {
            const spot = document.getElementById(player.position);
            if (spot) {
                // Crée une nouvelle carte pour le joueur avec son nom et sa position
                spot.innerHTML = `
                <div class="text-center text-slate-900 w-52 h-20">
                    <div class="text-xs">${player.name}</div>
                    <div class="text-xs">${player.position}</div>
                </div>
            `;
            }
        });
    }


    // Open the modal to add a new player
    function openModal() {
        const modal = document.createElement('div');
        modal.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'z-50', 'flex', 'items-center', 'justify-center', 'p-4');

        modal.innerHTML = `
            <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-gray-800">Add New Player</h2>
                        <button id="cancelBtn" class="text-gray-400 hover:text-red-600 transition-colors">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form id="playerForm" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700">Full Name</label>
                                <input 
                                    type="text" 
                                    id="playerName" 
                                    name="name" 
                                    required 
                                    class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter player name"
                                >
                            </div>
                            <div class="space-y-2">
                                <label class="block text-sm font-medium text-gray-700">Age</label>
                                <input 
                                    type="number" 
                                    id="playerAge" 
                                    name="age" 
                                    required 
                                    min="16" 
                                    max="45" 
                                    class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter age"
                                >
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-gray-700">Position</label>
                            <select 
                                id="playerPosition" 
                                name="position" 
                                required 
                                class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="GK1">Goalkeeper 1</option>
                                <option value="GK2">Goalkeeper 2</option>
                                <option value="LB1">Left Back</option>
                                <option value="RB1">Right Back</option>
                                <option value="CM1">Center Midfield</option>
                                <option value="ST1">Striker 1</option>
                                <option value="ST2">Striker 2</option>
                            </select>
                        </div>

                        <div id="playerStats" class="space-y-6">
                            <!-- Stats will be dynamically generated here -->
                        </div>

                        <div class="flex justify-between mt-6">
                            <button type="button" id="cancelBtn2" class="text-gray-500 hover:text-red-500">
                                Cancel
                            </button>
                            <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-md">Save Player</button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close the modal on cancel button click
        modal.querySelector('#cancelBtn').addEventListener('click', () => modal.remove());
        modal.querySelector('#cancelBtn2').addEventListener('click', () => modal.remove());

        // Generate stats inputs when position is selected
        modal.querySelector('#playerPosition').addEventListener('change', (event) => {
            const playerPosition = event.target.value;
            modal.querySelector('#playerStats').innerHTML = generateStatsInputs(playerPosition);
        });

        // Form submit handler
        modal.querySelector('#playerForm').addEventListener('submit', (event) => {
            event.preventDefault();
            const name = modal.querySelector('#playerName').value;
            const age = modal.querySelector('#playerAge').value;
            const position = modal.querySelector('#playerPosition').value;
            const stats = {};

            // Collect stats
            modal.querySelectorAll('input[type="number"]').forEach(input => {
                stats[input.name] = input.value;
            });

            // Save the new player
            const players = getStoredPlayers();
            players.push({ name, age, position, stats });
            saveToLocalStorage(players);
            updatePlayers();
            modal.remove();
        });

        // Open with default stats for selected position
        modal.querySelector('#playerPosition').dispatchEvent(new Event('change'));
    }

    // Event listener to open the modal for new player
    newPlayerBtn.addEventListener('click', openModal);

    // Initialize the field and any stored players
    initializeField();
});

document.addEventListener('DOMContentLoaded', () => {
    const newPlayerBtn = document.getElementById('newPlayerBtn');
    const field = document.getElementById('field');

    function change_stats(playerPosition) {
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

        return `
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                ${statsConfig.map(stat => `
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

    function get_stored_mainPlayers() {
        return JSON.parse(localStorage.getItem('selectedPlayers') || '[]');
    }

    function save_to_localStorage(players) {
        localStorage.setItem('reservedPlayer', JSON.stringify(players));
    }

    function initialize_field() {
        if (!field) return; // Guard clause if field element doesn't exist
        
        // Structure de base du terrain
        field.className = 'relative w-full aspect-[16/9] bg-green-600 rounded-lg m-4 overflow-hidden';
        
        // Positions pour la formation 4-4-2
        const positions = {
            'GK1': { top: '85%', left: '50%' },
            'GK2': { top: '85%', left: '50%' },
            'LB1': { top: '70%', left: '20%' },
            'CB1': { top: '70%', left: '40%' },
            'CB2': { top: '70%', left: '60%' },
            'RB1': { top: '70%', left: '80%' },
            'LW1': { top: '45%', left: '20%' },
            'LW2': { top: '45%', left: '20%' },
            'CM1': { top: '45%', left: '40%' },
            'CM2': { top: '45%', left: '60%' },
            'RW1': { top: '45%', left: '80%' },
            'ST1': { top: '20%', left: '35%' },
            'ST2': { top: '20%', left: '65%' }
        };

        
    
        // Marquages du terrain
        field.innerHTML =  `
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 border-2 border-white rounded-full"></div> <!-- cercel de milieu -->
            <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div> <!-- ligne de milieu -->
            <div class="absolute top-0 left-[15%] w-[70%] h-1/5 border-2 border-white"></div> <!-- Goole en haut -->
            <div class="absolute bottom-0 left-[15%] w-[70%] h-1/5 border-2 border-white"></div> <!-- Goole en nas -->
        `;
    
        // Créer les positions des joueurs
        Object.entries(positions).forEach(([position, coords]) => {
            const playerSpot = document.createElement('div');
            playerSpot.id = `${position}`;
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
    
        // Update players initially and when storage changes
        updatePlayers();
        window.addEventListener('storage', updatePlayers);
    }

    function updatePlayers() {
        const players = get_stored_mainPlayers();
        
        players.forEach(player => {
            const spot = document.getElementById(`${player.position}`);
            if (spot) {
                spot.innerHTML = `
                    <div class="text-center text-white">
                        <div class="text-xs">${player.name}</div>
                        <div class="text-xs">${player.position}</div>
                    </div>
                `;
            }
        });
    }

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

                            <div class="space-y-2 md:col-span-2">
                                <label class="block text-sm font-medium text-gray-700">Position</label>
                                <select 
                                    id="position" 
                                    name="player_positions" 
                                    required 
                                    class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                >
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
                                        <option value="LM">Left Midfielder (LM)</option>
                                        <option value="CM1">Center Midfielder 1 (CM1)</option>
                                        <option value="CM2">Center Midfielder 2 (CM2)</option>
                                        <option value="RM">Right Midfielder (RM)</option>
                                    </optgroup>
                                    <optgroup label="Forwards">
                                        <option value="ST1">Striker 1 (ST1)</option>
                                        <option value="ST2">Striker 2 (ST2)</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>

                        <div id="statsContainer">
                            ${change_stats('GK')}
                        </div>

                        <div class="flex gap-4 pt-6">
                            <button 
                                type="submit" 
                                class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors"
                            >
                                Add Player
                            </button>
                            <button 
                                type="button" 
                                class="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                                onclick="this.closest('.fixed').remove()"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Fermeture du modal
        modal.querySelector('#cancelBtn').addEventListener('click', () => modal.remove());

        // Fermeture en cliquant en dehors du modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });

        // Gestion de la position
        const positionSelect = modal.querySelector('#position');
        positionSelect.addEventListener('change', function() {
            const statsContainer = modal.querySelector('#statsContainer');
            statsContainer.innerHTML = check_position(this.value);
        });

        // Gestion du formulaire
        const form = modal.querySelector('#playerForm');
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const statsInputs = modal.querySelectorAll('#statsContainer input[type="number"]');
            let isValid = true;
            
            statsInputs.forEach(input => {
                if (!input.value || input.value < 1 || input.value > 99) {
                    isValid = false;
                    input.classList.add('border-red-500');
                } else {
                    input.classList.remove('border-red-500');
                }
            });

            if (!isValid) {
                alert('Please ensure all stats are between 1 and 99');
                return;
            }

            const player = {
                name: modal.querySelector('#playerName').value,
                age: modal.querySelector('#playerAge').value,
                position: modal.querySelector('#position').value,
                stats: Array.from(statsInputs).reduce((acc, input) => {
                    acc[input.name] = parseInt(input.value);
                    return acc;
                }, {})
            };

            const players = get_stored_mainPlayers();
            players.push(player);
            save_to_localStorage(players);
            
            modal.remove();
        });
    }

    newPlayerBtn.addEventListener('click', openModal);
    
    initialize_field();
});
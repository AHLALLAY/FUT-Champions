// Constants and state management
const STORAGE_KEY = 'selectedPlayers';

// DOM Elements
const playerModal = document.getElementById('playerModal');
const newPlayerBtn = document.getElementById('newPlayerBtn');
const cancelBtn = document.getElementById('cancelBtn');
const playerForm = document.getElementById('playerForm');
const teamContainer = document.getElementById('team');
const fieldContainer = document.getElementById('field');
const formationSelect = document.getElementById('formule');
const formationSelectMobile = document.getElementById('formule-mobile');

// State
let players = [];
let currentFormation = '4-4-2';

// Modal Management
function showModal() {
    playerModal.classList.remove('hidden');
}

function hideModal() {
    playerModal.classList.add('hidden');
    playerForm.reset();
}

// player Management
function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'bg-white p-4 rounded-lg shadow-md mb-4';
    card.dataset.playerId = player.id;

    card.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <h3 class="text-lg font-semibold">${player.name}</h3>
                <p class="text-gray-600 text-sm">Overall: ${player.overall}</p>
                <p class="text-gray-600 text-sm">Position: ${player.position}</p>
            </div>
            <button class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm delete-btn">
                Delete
            </button>
        </div>
    `;

    // Add delete functionality
    card.querySelector('.delete-btn').addEventListener('click', () => {
        deletePlayer(player.id);
    });

    return card;
}

function addPlayer(formData) {
    const newPlayer = {
        id: Date.now().toString(),
        name: formData.get('name'),
        shortName: formData.get('short_name'),
        overall: formData.get('overall'),
        position: formData.get('player_positions'),
        age: formData.get('age'),
        pace: formData.get('pace'),
        shooting: formData.get('shooting'),
        passing: formData.get('passing'),
        dribbling: formData.get('dribbling'),
        defending: formData.get('defending'),
        physicality: formData.get('physicality'),
        nationality: formData.get('nationality'),
        club: formData.get('club')
    };

    players.push(newPlayer);
    saveToLocalStorage();
    renderPlayers();
    renderField();
    hideModal();
}

function deletePlayer(playerId) {
    players = players.filter(player => player.id !== playerId);
    saveToLocalStorage();
    renderPlayers();
    renderField();
}

function renderPlayers() {
    teamContainer.innerHTML = '';
    players.forEach(player => {
        teamContainer.appendChild(createPlayerCard(player));
    });
}

function renderField() {
    fieldContainer.innerHTML = `
        <div class="relative w-full" style="padding-bottom: 150%;">
            <div class="absolute inset-0 bg-green-600 rounded-lg">
                ${getFormationLayout(currentFormation)}
            </div>
        </div>
    `;
}

function getFormationLayout(formation) {
    // Add formation-specific player positions
    const positions = {
        '4-4-2': {
            'GK': { top: '50%', left: '10%' },
            'LB': { top: '10%', left: '20%' },
            'CB1': { top: '30%', left: '20%' },
            'CB2': { top: '50%', left: '20%' },
            'RB': { top: '70%', left: '20%' },
            'LM': { top: '10%', left: '50%' },
            'CM1': { top: '30%', left: '50%' },
            'CM2': { top: '50%', left: '50%' },
            'RM': { top: '70%', left: '50%' },
            'ST1': { top: '30%', left: '70%' },
            'ST2': { top: '60%', left: '70%' }
        }
    };

    let html = '';
    for (const position in positions[formation]) {
        if (positions[formation].hasOwnProperty(position)) {
            const coords = positions[formation][position];
            const player = players.find(p => p.position === position);
            const playerName = player ? player.name : position;
            const playerClass = player ? 'text-xs font-bold' : 'text-xs text-gray-400';
    
            html += `
                <div class="absolute transform -translate-x-1/2 -translate-y-1/2" 
                     style="top: ${coords.top}; left: ${coords.left}">
                    <div class="w-12 h-12 bg-white flex items-center justify-center shadow-lg">
                        <span class="${playerClass}">${playerName}</span>
                    </div>
                </div>
            `;
        }
    }
    return html;
}

function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(players));
}

function loadFromLocalStorage() {
    const storedPlayers = localStorage.getItem(STORAGE_KEY);
    if (storedPlayers) {
        players = JSON.parse(storedPlayers);
        renderPlayers();
        renderField();
    }
}

// Event Listeners
newPlayerBtn.addEventListener('click', showModal);
cancelBtn.addEventListener('click', hideModal);

playerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(playerForm);
    addPlayer(formData);
});

formationSelect.addEventListener('change', () => {
    formationSelectMobile.value = currentFormation;
    renderField();
});

formationSelectMobile.addEventListener('change', (e) => {
    currentFormation = e.target.value;
    formationSelect.value = currentFormation;
    renderField();
});

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    renderField();
});
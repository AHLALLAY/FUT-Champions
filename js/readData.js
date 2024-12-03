document.addEventListener('DOMContentLoaded', () => {
    let allPlayers = {
        "players": [
            {
                "name": "Lionel Messi",
                "photo": "https://cdn.sofifa.net/players/158/023/25_120.png",
                "position": "RW1",
                "nationality": "Argentina",
                "flag": "https://cdn.sofifa.net/flags/ar.png",
                "club": "Inter Miami",
                "logo": "https://cdn.sofifa.net/meta/team/239235/120.png",
                "rating": 93,
                "pace": 85,
                "shooting": 92,
                "passing": 91,
                "dribbling": 95,
                "defending": 35,
                "physical": 65
            },
            {
                "name": "Mohamed Salah",
                "photo": "https://cdn.sofifa.net/players/209/331/25_120.png",
                "position": "RW2",
                "nationality": "Egypt",
                "flag": "https://cdn.sofifa.net/flags/eg.png",
                "club": "Liverpool",
                "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
                "rating": 89,
                "pace": 93,
                "shooting": 87,
                "passing": 81,
                "dribbling": 90,
                "defending": 45,
                "physical": 75
            },
            {
                "name": "Cristiano Ronaldo",
                "photo": "https://cdn.sofifa.net/players/020/801/25_120.png",
                "position": "ST1",
                "nationality": "Portugal",
                "flag": "https://cdn.sofifa.net/flags/pt.png",
                "club": "Al Nassr",
                "logo": "https://cdn.sofifa.net/meta/team/2506/120.png",
                "rating": 91,
                "pace": 84,
                "shooting": 94,
                "passing": 82,
                "dribbling": 87,
                "defending": 34,
                "physical": 77
            },
            {
                "name": "Kylian Mbappé",
                "photo": "https://cdn.sofifa.net/players/231/747/25_120.png",
                "position": "ST2",
                "nationality": "France",
                "flag": "https://cdn.sofifa.net/flags/fr.png",
                "club": "Real Madrid",
                "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
                "rating": 92,
                "pace": 97,
                "shooting": 89,
                "passing": 80,
                "dribbling": 92,
                "defending": 39,
                "physical": 77
            },
            {
                "name": "Karim Benzema",
                "photo": "https://cdn.sofifa.net/players/165/153/25_120.png",
                "position": "ST1",
                "nationality": "France",
                "flag": "https://cdn.sofifa.net/flags/fr.png",
                "club": "Al-Ittihad",
                "logo": "https://cdn.sofifa.net/meta/team/476/120.png",
                "rating": 90,
                "pace": 77,
                "shooting": 90,
                "passing": 83,
                "dribbling": 88,
                "defending": 40,
                "physical": 78
            },
            {
                "name": "Erling Haaland",
                "photo": "https://cdn.sofifa.net/players/239/085/25_120.png",
                "position": "ST2",
                "nationality": "Norway",
                "flag": "https://cdn.sofifa.net/flags/no.png",
                "club": "Manchester City",
                "logo": "https://cdn.sofifa.net/meta/team/9/30.png",
                "rating": 91,
                "pace": 89,
                "shooting": 94,
                "passing": 65,
                "dribbling": 80,
                "defending": 45,
                "physical": 88
            },
            {
                "name": "Youssef En-Nesyri",
                "photo": "https://cdn.sofifa.net/players/235/410/25_120.png",
                "position": "ST1",
                "nationality": "Morocco",
                "flag": "https://cdn.sofifa.net/flags/ma.png",
                "club": "Fenerbahçe",
                "logo": "https://cdn.sofifa.net/meta/team/88/120.png",
                "rating": 83,
                "pace": 82,
                "shooting": 82,
                "passing": 63,
                "dribbling": 77,
                "defending": 36,
                "physical": 80
            },
            {
                "name": "Joshua Kimmich",
                "photo": "https://cdn.sofifa.net/players/212/622/25_120.png",
                "position": "CM1",
                "nationality": "Germany",
                "flag": "https://cdn.sofifa.net/flags/de.png",
                "club": "Bayern Munich",
                "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
                "rating": 89,
                "pace": 70,
                "shooting": 75,
                "passing": 88,
                "dribbling": 84,
                "defending": 84,
                "physical": 81
            },
            {
                "name": "Kevin De Bruyne",
                "photo": "https://cdn.sofifa.net/players/192/985/25_120.png",
                "position": "CM2",
                "nationality": "Belgium",
                "flag": "https://cdn.sofifa.net/flags/be.png",
                "club": "Manchester City",
                "logo": "https://cdn.sofifa.net/meta/team/9/30.png",
                "rating": 91,
                "pace": 74,
                "shooting": 86,
                "passing": 93,
                "dribbling": 88,
                "defending": 64,
                "physical": 78
            },
            {
                "name": "Luka Modrić",
                "photo": "https://cdn.sofifa.net/players/177/003/25_120.png",
                "position": "CM1",
                "nationality": "Croatia",
                "flag": "https://cdn.sofifa.net/flags/hr.png",
                "club": "Real Madrid",
                "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
                "rating": 88,
                "pace": 74,
                "shooting": 78,
                "passing": 89,
                "dribbling": 90,
                "defending": 72,
                "physical": 65
            },
            {
                "name": "Bruno Fernandes",
                "photo": "https://cdn.sofifa.net/players/212/198/25_120.png",
                "position": "CM2",
                "nationality": "Portugal",
                "flag": "https://cdn.sofifa.net/flags/pt.png",
                "club": "Manchester United",
                "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
                "rating": 88,
                "pace": 75,
                "shooting": 85,
                "passing": 89,
                "dribbling": 84,
                "defending": 69,
                "physical": 77
            },
            {
                "name": "Ismael Saibari",
                "photo": "https://cdn.sofifa.net/players/259/480/25_120.png",
                "position": "CM1",
                "nationality": "Morocco",
                "flag": "https://cdn.sofifa.net/flags/ma.png",
                "club": "PSV",
                "logo": "https://cdn.sofifa.net/meta/team/682/120.png",
                "rating": 83,
                "pace": 89,
                "shooting": 78,
                "passing": 80,
                "dribbling": 86,
                "defending": 55,
                "physical": 84
            },
            {
                "name": "Virgil van Dijk",
                "photo": "https://cdn.sofifa.net/players/203/376/25_120.png",
                "position": "CB1",
                "nationality": "Netherlands",
                "flag": "https://cdn.sofifa.net/flags/nl.png",
                "club": "Liverpool",
                "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
                "rating": 90,
                "pace": 75,
                "shooting": 60,
                "passing": 70,
                "dribbling": 72,
                "defending": 92,
                "physical": 86
            },
            {
                "name": "Antonio Rudiger",
                "photo": "https://cdn.sofifa.net/players/205/452/25_120.png",
                "position": "CB2",
                "nationality": "Germany",
                "flag": "https://cdn.sofifa.net/flags/de.png",
                "club": "Real Madrid",
                "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
                "rating": 88,
                "pace": 82,
                "shooting": 55,
                "passing": 73,
                "dribbling": 70,
                "defending": 86,
                "physical": 86
            },
            {
                "name": "Yassine Bounou",
                "photo": "https://cdn.sofifa.net/players/209/981/25_120.png",
                "position": "GK1",
                "nationality": "Morocco",
                "flag": "https://cdn.sofifa.net/flags/ma.png",
                "club": "Al-Hilal",
                "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
                "rating": 84,
                "diving": 81,
                "handling": 82,
                "kicking": 77,
                "reflexes": 86,
                "speed": 38,
                "positioning": 83
            },
            {
                "name": "Gianluigi Donnarumma",
                "photo": "https://cdn.sofifa.net/players/230/621/25_120.png",
                "position": "GK2",
                "nationality": "Italy",
                "flag": "https://cdn.sofifa.net/flags/it.png",
                "club": "Paris Saint-Germain",
                "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
                "rating": 89,
                "diving": 88,
                "handling": 84,
                "kicking": 75,
                "reflexes": 90,
                "speed": 50,
                "positioning": 85
            },
            {
                "name": "Jan Oblak",
                "photo": "https://cdn.sofifa.net/players/200/389/25_120.png",
                "position": "GK1",
                "nationality": "Slovenia",
                "flag": "https://cdn.sofifa.net/flags/si.png",
                "club": "Atletico Madrid",
                "logo": "https://cdn.sofifa.net/meta/team/7980/120.png",
                "rating": 91,
                "diving": 89,
                "handling": 90,
                "kicking": 78,
                "reflexes": 92,
                "speed": 50,
                "positioning": 88
            },
            {
                "name": "Brahim Diáz",
                "photo": "https://cdn.sofifa.net/players/231/410/25_120.png",
                "position": "LW1",
                "nationality": "Morocco",
                "flag": "https://cdn.sofifa.net/flags/ma.png",
                "club": "Real Madrid",
                "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
                "rating": 82,
                "pace": 85,
                "shooting": 74,
                "passing": 78,
                "dribbling": 85,
                "defending": 31,
                "physical": 56
            },
            {
                "name": "Neymar Jr",
                "photo": "https://cdn.sofifa.net/players/190/871/25_120.png",
                "position": "LW2",
                "nationality": "Brazil",
                "flag": "https://cdn.sofifa.net/flags/br.png",
                "club": "Al-Hilal",
                "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
                "rating": 90,
                "pace": 91,
                "shooting": 83,
                "passing": 86,
                "dribbling": 94,
                "defending": 37,
                "physical": 61
            },
            {
                "name": "Jadon Sancho",
                "photo": "https://cdn.sofifa.net/players/233/049/25_120.png",
                "position": "LW1",
                "nationality": "England",
                "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
                "club": "Manchester United",
                "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
                "rating": 84,
                "pace": 85,
                "shooting": 74,
                "passing": 78,
                "dribbling": 88,
                "defending": 34,
                "physical": 63
            },
            {
                "name": "Vinicius Junior",
                "photo": "https://cdn.sofifa.net/players/238/794/25_120.png",
                "position": "LW2",
                "nationality": "Brazil",
                "flag": "https://cdn.sofifa.net/flags/br.png",
                "club": "Real Madrid",
                "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
                "rating": 89,
                "pace": 91,
                "shooting": 88,
                "passing": 85,
                "dribbling": 94,
                "defending": 39,
                "physical": 61
            },
            {
                "name": "Noussair Mazraoui",
                "photo": "https://cdn.sofifa.net/players/236/401/25_120.png",
                "position": "LB1",
                "nationality": "Morocco",
                "flag": "https://cdn.sofifa.net/flags/ma.png",
                "club": "Manchester United",
                "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
                "rating": 81,
                "pace": 78,
                "shooting": 66,
                "passing": 77,
                "dribbling": 83,
                "defending": 77,
                "physical": 71
            },
            {
                "name": "Alphonso Davies",
                "photo": "https://cdn.sofifa.net/players/234/396/25_120.png",
                "position": "LB2",
                "nationality": "Canada",
                "flag": "https://cdn.sofifa.net/flags/ca.png",
                "club": "Bayern Munich",
                "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
                "rating": 84,
                "pace": 96,
                "shooting": 68,
                "passing": 77,
                "dribbling": 82,
                "defending": 76,
                "physical": 77
            },
            {
                "name": "Achraf Hakimi",
                "photo": "https://cdn.sofifa.net/players/235/212/25_120.png",
                "position": "RB1",
                "nationality": "Morocco",
                "flag": "https://cdn.sofifa.net/flags/ma.png",
                "club": "Paris Saint-Germain",
                "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
                "rating": 84,
                "pace": 91,
                "shooting": 76,
                "passing": 80,
                "dribbling": 80,
                "defending": 75,
                "physical": 78
            },
            {
                "name": "Trent Alexander-Arnold",
                "photo": "https://cdn.sofifa.net/players/231/281/25_120.png",
                "position": "RB2",
                "nationality": "England",
                "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
                "club": "Liverpool",
                "logo": "https://cdn.sofifa.net/meta/team/8/30.png",
                "rating": 87,
                "pace": 76,
                "shooting": 66,
                "passing": 89,
                "dribbling": 80,
                "defending": 79,
                "physical": 71
            },
            {
                "name": "N'Golo Kanté",
                "photo": "https://cdn.sofifa.net/players/215/914/25_120.png",
                "position": "CDM",
                "nationality": "France",
                "flag": "https://cdn.sofifa.net/flags/fr.png",
                "club": "Al-Ittihad",
                "logo": "https://cdn.sofifa.net/meta/team/476/120.png",
                "rating": 87,
                "pace": 77,
                "shooting": 66,
                "passing": 75,
                "dribbling": 82,
                "defending": 88,
                "physical": 82
            }
        ]
    };

    const playersInStorage = JSON.parse(localStorage.getItem('selectedPlayers')) || [];

    // Fonction pour créer les statistiques du joueur
    function createPlayerStats(player) {
        const statsConfig = player.position.startsWith('GK') ? [
            { label: 'DIV', value: player.diving },
            { label: 'HAN', value: player.handling },
            { label: 'KIC', value: player.kicking },
            { label: 'REF', value: player.reflexes },
            { label: 'SPE', value: player.speed },
            { label: 'POS', value: player.positioning }
        ] : [
            { label: 'PAC', value: player.pace },
            { label: 'SHO', value: player.shooting },
            { label: 'PAS', value: player.passing },
            { label: 'DRI', value: player.dribbling },
            { label: 'DEF', value: player.defending },
            { label: 'PHY', value: player.physical }
        ];

        return `
            <div class="grid grid-cols-3 gap-2 text-sm">
                ${statsConfig.map(stat => `
                    <div class="text-center">
                        <div class="font-semibold">${stat.label}</div>
                        <div>${stat.value || '-'}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Fonction pour créer le HTML d'une carte de joueur
    function createPlayerCardHTML(player) {
        return `
            <div class="flex items-center space-x-4">
                <img src="${player.photo}" alt="${player.name}" class="w-16 h-16 rounded-full object-cover"/>
                <div>
                    <h3 class="font-bold">${player.name}</h3>
                    <div class="flex items-center space-x-2">
                        <img src="${player.flag}" alt="${player.nationality}" class="w-6 h-4"/>
                        <span class="text-sm text-gray-600">${player.nationality}</span>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <img src="${player.logo}" alt="${player.club}" class="w-8 h-8"/>
                    <span class="text-sm">${player.club}</span>
                </div>
                <div>
                    <span class="text-lg font-bold text-blue-600">${player.rating}</span>
                    <span class="text-lg font-bold text-blue-600">${player.position}</span>
                </div>
            </div>
            ${createPlayerStats(player)}
        `;
    }

    // Fonction pour initialiser les filtres
    function initializeFilters() {
        const positions = [...new Set(allPlayers.players.map(player => player.position.substring(0, 2)))];
        const positionFilter = document.getElementById('positionFilter');
        positionFilter.innerHTML = '<option value="">Toutes les positions</option>' +
            positions.map(position => `<option value="${position}">${position}</option>`).join('');
    }

    // Fonction pour afficher les joueurs
    function renderPlayers(players, isSelectable = true) {
        const container = document.getElementById('players');
        container.innerHTML = players.map(player => {
            const card = `
                <div class="bg-white rounded-lg shadow-lg p-4 space-y-4 ${isSelectable ? 'cursor-pointer' : ''}" 
                     data-player-id="${player.name}">
                    ${createPlayerCardHTML(player)}
                </div>
            `;
            return card;
        }).join('');

        if (isSelectable) {
            container.querySelectorAll('[data-player-id]').forEach(card => {
                card.addEventListener('click', () => {
                    const player = players.find(p => p.name === card.dataset.playerId);
                    if (playersInStorage.length < 11) {
                        addToLocalStorage(player);
                        card.classList.add('border', 'border-green-500');
                    } else {
                        alert(`team est déjà complete.`);
                    }
                });
            });
        }
    }

    // Fonction pour filtrer les joueurs
    function filterPlayers() {
        const position = document.getElementById('positionFilter').value;
        const filteredPlayers = allPlayers.players.filter(player =>
            !position || player.position.substring(0, 2) === position
        );
        renderPlayers(filteredPlayers);
    }

    // Fonction pour ajouter un joueur au localStorage
    function addToLocalStorage(player) {
        const existingPlayer = playersInStorage.find(p => p.name === player.name);
        if (playersInStorage.length < 11) {
            if (!existingPlayer) {
                playersInStorage.push(player);
                localStorage.setItem('selectedPlayers', JSON.stringify(playersInStorage));
            } else {
                alert(`${player.name} est déjà dans votre sélection.`);
            }
        } else {
            alert(`team est déjà complete.`);
        }
    }

    // Fonction pour afficher les joueurs sélectionnés
    function displaySelectedPlayers() {
        const container = document.getElementById('players');
        if (playersInStorage.length > 0) {
            renderPlayers(playersInStorage, false);
        } else {
            container.innerHTML = '<p>Aucun joueur sélectionné.</p>';
        }
    }

    function player_selected_list() {
        const playerSelected = document.getElementById('playerSelected');
        playerSelected.innerHTML = '<option value="default">Selectionner un Joueur</option>';

        playersInStorage.forEach(player => {
            const option = document.createElement('option');
            option.value = player.name;
            option.textContent = player.name;
            playerSelected.appendChild(option);

            // console.log(player.name);
        });
    }

    function remove_main_player() {    
        const player_to_remove = document.getElementById('playerSelected');
        const updatedPlayers = playersInStorage.filter(player => player.name !== player_to_remove.value);
        if (updatedPlayers){
            let reponde = confirm(`tu es sûr pour exclus ${player_to_remove.value} ?`);
            if (reponde){
                localStorage.setItem('selectedPlayers', JSON.stringify(updatedPlayers));
                alert(`${player_to_remove.value} est exclus`);
            }else {
                alert(`${player_to_remove.value} est heureux !!`);
            }
        }        
        // renderPlayers();
        displaySelectedPlayers();
    }
    

    function refreshPage() {
        location.reload();
    }

    function clear_storage() {
        const reponse = confirm('vous étes en train de supprimer les joueur sélectionné ?')
        if (reponse) {
            localStorage.clear();
            refreshPage();
            displaySelectedPlayers();
        }
    }
    // Event listeners
    document.getElementById('positionFilter').addEventListener('change', filterPlayers);
    document.getElementById('selected_player').addEventListener('click', displaySelectedPlayers);
    document.getElementById('refresh').addEventListener('click', refreshPage);
    document.getElementById('delete').addEventListener('click', clear_storage);
    document.getElementById('Remove').addEventListener('click', remove_main_player);

    // Initialisation
    initializeFilters();
    renderPlayers(allPlayers.players);
    player_selected_list();
});
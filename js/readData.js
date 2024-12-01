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

    // Initialize filter options
    function initializeFilters() {
        const positions = [...new Set(allPlayers.players.map(player => player.position))];

        const positionFilter = document.getElementById('positionFilter');
        positions.forEach(position => {
            const option = document.createElement('option');
            option.value = position;
            option.textContent = position;
            positionFilter.appendChild(option);
        });
    }

    // Render players
    function renderPlayers(players) {
        const container = document.getElementById('players');
        container.innerHTML = '';

        players.forEach(player => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-lg p-4 space-y-4';


            card.innerHTML = `
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
                <div class="grid grid-cols-3 gap-2 text-sm">
                    <div class="text-center">
                        <div class="font-semibold">PAC</div>
                        <div>${player.pace || '-'}</div>
                    </div>
                    <div class="text-center">
                        <div class="font-semibold">SHO</div>
                        <div>${player.shooting || '-'}</div>
                    </div>
                    <div class="text-center">
                        <div class="font-semibold">PAS</div>
                        <div>${player.passing || '-'}</div>
                    </div>
                    <div class="text-center">
                        <div class="font-semibold">DRI</div>
                        <div>${player.dribbling || '-'}</div>
                    </div>
                    <div class="text-center">
                        <div class="font-semibold">DEF</div>
                        <div>${player.defending || '-'}</div>
                    </div>
                    <div class="text-center">
                        <div class="font-semibold">PHY</div>
                        <div>${player.physical || '-'}</div>
                    </div>
                </div>
            `;

            // Check if the player is a goalkeeper (GK) and update stats
            if (player.position.startsWith('GK')) {
                const statsContainer = card.querySelector('.grid');
                statsContainer.innerHTML = `
                    <div class="text-center">
                        <div class="font-semibold">DIV</div>
                        <div>${player.diving || '-'}</div>
                    </div>
                    <div class="text-center">
                        <div class="font-semibold">HAN</div>
                        <div>${player.handling || '-'}</div>
                    </div>
                    <div class="text-center">
                        <div class="font-semibold">KIC</div>
                        <div>${player.kicking || '-'}</div>
                    </div>
                    <div class="text-center">
                        <div class="font-semibold">REF</div>
                        <div>${player.reflexes || '-'}</div>
                    </div>
                    <div class="text-center">
                        <div class="font-semibold">SPE</div>
                        <div>${player.speed || '-'}</div>
                    </div>
                    <div class="text-center">
                        <div class="font-semibold">POS</div>
                        <div>${player.positioning || '-'}</div>
                    </div>
                `;
            }

            // Add click event listener to each card
            card.addEventListener('click', () => {
                addToLocalStorage(player);
                card.classList.add('border', 'border-green-500');
            });

            container.appendChild(card);
        });
    }

    // Filter handling
    function filterPlayers() {
        const position = document.getElementById('positionFilter').value;

        const filteredPlayers = allPlayers.players.filter(player => {
            return (!position || player.position === position);
        });

        renderPlayers(filteredPlayers);
    }

    // Function to add a player to localStorage
    function addToLocalStorage(player) {
        // Check if the player is already in the storage
        const existingPlayer = playersInStorage.find(p => p.name === player.name);
        if (!existingPlayer) {
            playersInStorage.push(player);
            localStorage.setItem('selectedPlayers', JSON.stringify(playersInStorage));
            // alert(`${player.name} has been added to your selected players.`);
            
        } else {
            alert(`${player.name} is already in your selected players.`);
        }
    }

    function displaySelectedPlayer() {
        const container = document.getElementById('players');

        // Clear any existing content
        container.innerHTML = '';

        // Check if there are selected players in localStorage
        if (playersInStorage.length > 0) {
            // Render selected players
            playersInStorage.forEach(player => {
                const card = document.createElement('div');
                card.className = 'bg-white rounded-lg shadow-lg p-4 space-y-4';

                card.innerHTML = `
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
                    <div class="grid grid-cols-3 gap-2 text-sm">
                        <div class="text-center">
                            <div class="font-semibold">PAC</div>
                            <div>${player.pace || '-'}</div>
                        </div>
                        <div class="text-center">
                            <div class="font-semibold">SHO</div>
                            <div>${player.shooting || '-'}</div>
                        </div>
                        <div class="text-center">
                            <div class="font-semibold">PAS</div>
                            <div>${player.passing || '-'}</div>
                        </div>
                        <div class="text-center">
                            <div class="font-semibold">DRI</div>
                            <div>${player.dribbling || '-'}</div>
                        </div>
                        <div class="text-center">
                            <div class="font-semibold">DEF</div>
                            <div>${player.defending || '-'}</div>
                        </div>
                        <div class="text-center">
                            <div class="font-semibold">PHY</div>
                            <div>${player.physical || '-'}</div>
                        </div>
                    </div>
                `;

                // Check if the player is a goalkeeper (GK) and update stats
                if (player.position.startsWith('GK')) {
                    const statsContainer = card.querySelector('.grid');
                    statsContainer.innerHTML = `
                        <div class="text-center">
                            <div class="font-semibold">DIV</div>
                            <div>${player.diving || '-'}</div>
                        </div>
                        <div class="text-center">
                            <div class="font-semibold">HAN</div>
                            <div>${player.handling || '-'}</div>
                        </div>
                        <div class="text-center">
                            <div class="font-semibold">KIC</div>
                            <div>${player.kicking || '-'}</div>
                        </div>
                        <div class="text-center">
                            <div class="font-semibold">REF</div>
                            <div>${player.reflexes || '-'}</div>
                        </div>
                        <div class="text-center">
                            <div class="font-semibold">SPE</div>
                            <div>${player.speed || '-'}</div>
                        </div>
                        <div class="text-center">
                            <div class="font-semibold">POS</div>
                            <div>${player.positioning || '-'}</div>
                        </div>
                    `;
                }

                container.appendChild(card);
            });
        } else {
            // If no players are selected, show a message
            container.innerHTML = `<p>No players selected yet.</p>`;
        }
    }

    function refrechPage() {
        // card.classList.remove('border', 'border-green-500');
        localStorage.clear();
        location.reload();
    }
    // Event listeners
    document.getElementById('positionFilter').addEventListener('change', filterPlayers);
    document.getElementById('selected_player').addEventListener('click', displaySelectedPlayer);
    document.getElementById('refresh').addEventListener('click', refrechPage);

    // Initialize and render players on page load
    initializeFilters();
    renderPlayers(allPlayers.players);
});
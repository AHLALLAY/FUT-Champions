document.addEventListener('DOMContentLoaded', function () {
    const newPlayerBtn = document.getElementById('newPlayerBtn');
    const playerModal = document.getElementById('playerModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const playerForm = document.getElementById('playerForm');
    const mainContent = document.querySelector('main');

    function drawField() {
        
        const fieldContainer = document.createElement('div');
        fieldContainer.classList.add('relative', 'w-full', 'h-[50vh]', 'sm:h-[600px]', 'bg-green-500', 'border-2', 'border-white', 'rounded-lg');

        // Cercle central
        const centerCircle = document.createElement('div');
        centerCircle.classList.add('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'rounded-full', 'w-[180px]', 'h-[180px]', 'border-2', 'border-white');
        fieldContainer.appendChild(centerCircle);

        // Ligne centrale
        const centerLine = document.createElement('div');
        centerLine.classList.add('absolute', 'top-0', 'left-1/2', 'w-[2px]', 'h-full', 'bg-white');
        fieldContainer.appendChild(centerLine);

        // Buts
        const goalLeft = document.createElement('div');
        goalLeft.classList.add('absolute', 'left-0', 'top-1/2', '-translate-y-1/2', 'w-[60px]', 'h-[150px]', 'bg-white');
        fieldContainer.appendChild(goalLeft);

        const goalRight = document.createElement('div');
        goalRight.classList.add('absolute', 'right-0', 'top-1/2', '-translate-y-1/2', 'w-[60px]', 'h-[150px]', 'bg-white');
        fieldContainer.appendChild(goalRight);

        mainContent.querySelector('#field').appendChild(fieldContainer);

        
    }

    function openModal() {
        playerModal.classList.remove('hidden');
    }

    function closeModal() {
        playerModal.classList.add('hidden');
    }

    playerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const playerName = document.getElementById('playerName').value;
        const shortName = document.getElementById('playerShortName').value;
        const overall = document.getElementById('overall').value;
        const position = document.getElementById('position').value;
        const age = document.getElementById('age').value;
        const nationality = document.getElementById('nationality').value;
        const club = document.getElementById('club').value;

        console.log('Joueur ajouté:', { playerName, shortName, overall, position, age, nationality, club });

        closeModal();
    });

    newPlayerBtn.addEventListener('click', openModal);
    cancelBtn.addEventListener('click', closeModal);

    drawField();
});
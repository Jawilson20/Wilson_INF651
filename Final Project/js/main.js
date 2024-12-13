// Flag to check if the first drag has occurred
let firstDrag = false;

// Function to navigate between pages
function navigateToPage(page) {
    const home = document.getElementById('home');
    const playDesign = document.getElementById('play-design');

    if (page === 'play-design') {
        home.style.display = 'none';
        playDesign.style.display = 'block';
    } else if (page === 'home') {
        home.style.display = 'block';
        playDesign.style.display = 'none';
    }
}

// Allow dropping of draggable items into the playfield
function allowDrop(event) {
    event.preventDefault();
}

// Handle the start of the drag event
function drag(event) {
    const playDesign = document.getElementById('play-design');
    if (playDesign.style.display !== 'block') return; // Restrict dragging to play design page

    if (!firstDrag) {
        // Hide the prompt when the first player is dragged
        const prompt = document.querySelector('#playfield h2');
        if (prompt) {
            prompt.style.display = 'none';
        }
        firstDrag = true;
    }
    event.dataTransfer.setData("text", event.target.id);
}

// Handle the drop event when a player is dragged into the playfield
function drop(event) {
    event.preventDefault();

    const playDesign = document.getElementById('play-design');
    if (playDesign.style.display !== 'block') return; // Restrict dropping to play design page

    // Get the dragged player's ID and element
    const playerId = event.dataTransfer.getData("text");
    const playerElement = document.getElementById(playerId);

    // Get the playfield boundaries
    const playfield = document.getElementById("playfield");
    const playfieldRect = playfield.getBoundingClientRect();

    // Calculate the drop position within the playfield
    const dropX = event.clientX - playfieldRect.left;
    const dropY = event.clientY - playfieldRect.top;

    // Ensure the player stays within the playfield bounds
    if (dropX >= 0 && dropX <= playfield.offsetWidth - playerElement.offsetWidth &&
        dropY >= 0 && dropY <= playfield.offsetHeight - playerElement.offsetHeight) {

        // Clone the dragged player and set its position
        const clonedPlayer = playerElement.cloneNode(true);
        clonedPlayer.style.position = "absolute";
        clonedPlayer.style.left = `${dropX - playerElement.offsetWidth / 2}px`;
        clonedPlayer.style.top = `${dropY - playerElement.offsetHeight / 2}px`;
        clonedPlayer.style.zIndex = 1; // Ensure it stays on top of other elements

        // Append the cloned player to the playfield
        playfield.appendChild(clonedPlayer);
    }
}

// Save the play (placeholder for future functionality)
function savePlay() {
    alert("Your play has been saved!");
}






// Simulated player data (to be replaced with data from the play-design page)
let simulatedPlayers = [
    { id: "offense1", type: "offense", x: 10, y: 50 },
    { id: "offense2", type: "offense", x: 20, y: 60 },
    { id: "defense1", type: "defense", x: 30, y: 30 },
    { id: "defense2", type: "defense", x: 40, y: 40 },
];

// Function to dynamically render players on the simulation field
function renderSimulationField() {
    const playfield = document.getElementById("simulation-playfield");
    playfield.innerHTML = ""; // Clear existing players

    simulatedPlayers.forEach((player) => {
        const playerDiv = document.createElement("div");
        playerDiv.id = player.id;
        playerDiv.className = `player ${player.type}`;
        playerDiv.style.left = `${player.x}%`;
        playerDiv.style.top = `${player.y}%`;
        playerDiv.textContent = player.id.toUpperCase();
        playfield.appendChild(playerDiv);
    });
}

// Function to start the simulation
function startSimulation() {
    const steps = [
        { id: "offense1", x: 30, y: 50 },
        { id: "offense2", x: 50, y: 60 },
        { id: "defense1", x: 25, y: 30 },
        { id: "defense2", x: 20, y: 40 },
    ];

    steps.forEach((step, index) => {
        setTimeout(() => {
            const player = simulatedPlayers.find((p) => p.id === step.id);
            if (player) {
                player.x = step.x;
                player.y = step.y;
                renderSimulationField();
            }
        }, index * 1000); // Simulate movement every second
    });
}

// Function to reset the simulation
function resetSimulation() {
    simulatedPlayers = [
        { id: "offense1", type: "offense", x: 10, y: 50 },
        { id: "offense2", type: "offense", x: 20, y: 60 },
        { id: "defense1", type: "defense", x: 30, y: 30 },
        { id: "defense2", type: "defense", x: 40, y: 40 },
    ];
    renderSimulationField();
}

// Call this function to initialize the simulation field
renderSimulationField();






const draggables = document.querySelectorAll('.draggable');
const playfield = document.querySelector('.playfield');

draggables.forEach(draggable => {
    draggable.addEventListener('mousedown', function(e) {
        e.preventDefault();
        let offsetX = e.clientX - this.offsetLeft;
        let offsetY = e.clientY - this.offsetTop;

        function moveAt(e) {
            draggable.style.left = e.clientX - offsetX + 'px';
            draggable.style.top = e.clientY - offsetY + 'px';
        }

        document.addEventListener('mousemove', moveAt);

        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', moveAt);
        }, { once: true });
    });
});

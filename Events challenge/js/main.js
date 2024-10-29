document.addEventListener('DOMContentLoaded', () => {

    const nameInput = document.getElementById('nameInput');
    const submitButton = document.getElementById('submitButton');
    const outputDiv = document.getElementById('outputDiv');
    const mouseTracker = document.getElementById('mouseTracker');
    const coordinatesDiv = document.getElementById('coordinates');

    // Click Event
    submitButton.addEventListener('click', () => {
        const name = nameInput.value.trim(); // Trim input value to avoid spaces

        if (name) {
            // Display welcome message and set background to green if name is entered
            outputDiv.textContent = `Welcome, ${name}!`;
            outputDiv.style.color = 'white';
            outputDiv.style.backgroundColor = 'green';
        } else {
            // Show error message in red if input is empty
            outputDiv.textContent = 'Error: Please enter a name.';
            outputDiv.style.color = 'red';
            outputDiv.style.backgroundColor = '';
        }
    });

    // Mouse Event: Track and display mouse coordinates in real-time
    mouseTracker.addEventListener('mousemove', (event) => {
        const x = event.offsetX; 
        const y = event.offsetY; 
        coordinatesDiv.textContent = `Mouse Coordinates: X: ${x}, Y: ${y}`;
    });

    // Keyboard Event: Trigger submit button on "Enter" key press
    nameInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission
            submitButton.click(); // Trigger the click event programmatically
        }
    });
});

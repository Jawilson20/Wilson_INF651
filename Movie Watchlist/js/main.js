// Array to store the list of movies
let movieWatchlist = [];

// Function to add a movie to the watchlist
function addMovie() {
    const movieInput = document.getElementById('movie-name'); // Input field for the movie title
    const movieTitle = movieInput.value.trim(); // Get the entered movie title

    // Check if the input is not empty
    if (movieTitle !== '') {
        movieWatchlist.push(movieTitle); // Add the movie to the watchlist array
        movieInput.value = ''; // Clear the input field after adding
        displayWatchlist(); // Update the watchlist display
    } else {
        alert('Please enter a movie title.'); // Alert if the input is empty
    }
}

// Function to display the watchlist dynamically
function displayWatchlist() {
    const movieListContainer = document.getElementById('movie-list'); // Container to display the watchlist
    movieListContainer.innerHTML = ''; // Clear the current list before displaying the updated list

    // Loop through the array and create an HTML element for each movie
    movieWatchlist.forEach((movie, index) => {
        const movieItem = document.createElement('li'); // Create a list item for each movie
        movieItem.className = 'collection-item movie-item'; // Add classes for styling

        // Add the movie title and a "Watched" button to each movie item
        movieItem.innerHTML = `
            <span class="movie-title">${movie}</span>
            <i class="material-icons remove-btn" onclick="removeMovie(${index})">check_circle</i>
        `;

        movieListContainer.appendChild(movieItem); // Add the movie item to the container
    });
}

// Function to remove a movie from the watchlist
function removeMovie(index) {
    movieWatchlist.splice(index, 1); // Remove the movie from the array at the specified index
    displayWatchlist(); // Update the watchlist display
}

// Add event listener to the "Add Movie" button to trigger the addMovie function
document.getElementById('add-movie-btn').addEventListener('click', addMovie);

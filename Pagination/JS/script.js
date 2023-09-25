var objectData = [];

//modal code
const openModalButton = document.getElementById("openModalButton");
const modal = document.getElementById("myModal");
const closeModalButton = document.querySelector(".closeModal");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Event listeners
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

function putMovieOnTheSite(movie){
    var ul = document.getElementById("tableList");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(`${movie.title}, ${movie.director}, ${movie.release}, ${movie.starring.join(", ")}`));
    ul.appendChild(li);
}

function addMovieToPage(movie){
    objectData.push(movie);

    closeModal();
}

// Define variables
let currentPage = 1;
const moviesPerPage = 2; // Change this value as needed

// Function to update the movie list based on the current page
function updateMovieList() {
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const moviesToDisplay = objectData.slice(startIndex, endIndex);

    const ul = document.getElementById("tableList");
    ul.innerHTML = ""; // Clear the previous list

    moviesToDisplay.forEach(movie => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${movie.title}, ${movie.director}, ${movie.release}, ${movie.starring.join(", ")}`));
        ul.appendChild(li);
    });

    // Update the pagination navigation
    updatePaginationButtons();
}

// Function to update the pagination navigation
function updatePaginationButtons() {
    const totalPages = Math.ceil(objectData.length / moviesPerPage);
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    // You can also update other elements to show the current page and total pages if needed
}

function addMovie() {
    let actors = [];

    let title = document.getElementById("title").value;
    let director = document.getElementById("director").value;
    let release = document.getElementById("release").value;
    actors.push(document.getElementById("starring").value);

    let movie = {
        title: title,
        director: director,
        release: release,
        starring: actors
    }

    console.log(objectData);

    putMovieOnTheSite(movie);
    addMovieToPage(movie);

    const existingMovieIndex = objectData.findIndex(existingMovie => existingMovie.title === movie.title);

    if (existingMovieIndex === -1) {
        // Movie does not exist in objectData, add it
        objectData.push(movie);

        // Close the modal
        closeModal();

        updateMovieList();
    } else {
        // Movie already exists, you can choose to handle it as you prefer
        console.log("Movie already exists in objectData");
    }
}

// Event listener for the "Next" button
document.getElementById("nextButton").addEventListener("click", () => {
    currentPage++;
    updateMovieList();
});

// Event listener for the "Previous" button
document.getElementById("prevButton").addEventListener("click", () => {
    currentPage--;
    updateMovieList();
});

// Call the initial update to display the first page of movies
updateMovieList();

const container = document.querySelector(".container");
const resizeButton = document.getElementById("resize-grid");

function createGrid(size) {
    container.innerHTML = ""; // Clear the existing grid
    const squareSize = `calc(100% / ${size})`; // Dynamic size for each grid square

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.flex = `1 0 ${squareSize}`; // Dynamically set flex property
        square.dataset.darken = 0; // Initial darkening level at 0%

        // Add hover effect for random colors and darkening
        square.addEventListener("mouseover", () => {
            if (square.style.backgroundColor === "") {
                // Set a random RGB color initially
                square.style.backgroundColor = getRandomRGB();
            }
            darkenSquare(square);
        });

        container.appendChild(square);
    }
}

// Function to generate random RGB color
function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function darkenSquare(square) {
    let currentDarken = parseInt(square.dataset.darken); // Get current darken level
    if (currentDarken < 10) {
        currentDarken += 1; // Increase darken level by 10%
        square.dataset.darken = currentDarken;

        // Extract the current RGB color
        const rgb = square.style.backgroundColor.match(/\d+/g);
        const [r, g, b] = rgb.map((value) =>
            Math.max(0, Math.floor(value * (1 - 0.1))) // Darken each channel by 10%
        );

        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

function resizeGrid() {
    let newSize = prompt("Insert a number between 1 and 100:");
    newSize = parseInt(newSize); // Convert to number

    if (newSize >= 1 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Invalid input! Please enter a number between 1 and 100.");
    }
}

resizeButton.addEventListener("click", resizeGrid);

createGrid(16); // Initial 16x16 grid
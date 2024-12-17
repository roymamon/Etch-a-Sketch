const container = document.querySelector(".container");
const resizeButton = document.getElementById("resize-grid");

function createGrid(size) {
    container.innerHTML = ""; // Clear the existing grid
    const squareSize = `calc(100% / ${size})`; // Dynamic size for each grid square

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.flex = `1 0 ${squareSize}`; // Dynamically set flex property
        // Add hover effect for random colors
        square.addEventListener("mouseover", () => {
            const randomColor = getRandomRGB();
            square.style.backgroundColor = randomColor;
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
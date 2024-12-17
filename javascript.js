const container = document.querySelector(".container");

function createGrid(rows, cols) {
    const totalSquares = rows * cols;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        container.appendChild(square);
    }
}

createGrid(16, 16); // Create a 16x16 grid
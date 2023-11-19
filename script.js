const gridContainer = document.getElementById('grid-container');
const generationElement = document.getElementById('generation');
const populationElement = document.getElementById('population');
const buttons = document.querySelectorAll('button')
const playElement = buttons[0]
const reloadElement = buttons[1]
let intervalId;

const rows = 50;
const cols = 50;
let isPlaying = false;
let generation = 0;
let population = 0;
let startPopulation = 0;
let isMouseDown = false;

// check if mouse is down or up to set variable isMouseDown
gridContainer.addEventListener('mousedown', () => isMouseDown = true);
gridContainer.addEventListener('mouseup', () => isMouseDown = false);

const speedRange = document.getElementById('speedRange');
const speedValue = document.getElementById('speedValue');

speedRange.addEventListener('input', () => {
    const speed = parseInt(speedRange.value);
    speedValue.textContent = speed;
    updateSpeed(speed);
});

// Mettre à jour la vitesse du jeu
function updateSpeed(speed) {
    clearInterval(intervalId);
    if (isPlaying) {
        play(speed);
    }
}

// Create the grid
const grid = new Array(rows).fill(null).map(() => new Array(cols).fill(false));

// Initialize the grid in the HTML
function initializeGrid() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.addEventListener('mouseover', () => {
                // Vérifiez si le bouton de la souris est enfoncé avant de changer l'état de la cellule
                if (isMouseDown) {
                    toggleCell(row, col);
                }
            });
            cell.addEventListener('mousedown', () => toggleCell(row, col));
            gridContainer.appendChild(cell);
        }
    }

}

// Toggle the state of a cell
function toggleCell(row, col) {
    grid[row][col] = !grid[row][col];
    const cell = document.getElementsByClassName('cell')[row * cols + col];
    cell.classList.toggle('live');
    population = countPopulation();
    populationElement.textContent = population;
}

// Count the live neighbors of a cell
function countLiveNeighbors(row, col) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const newRow = row + i;
            const newCol = col + j;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !(i === 0 && j === 0)) {
                count += grid[newRow][newCol] ? 1 : 0;
            }
        }
    }
    return count;
}

// Update the grid based on the rules of the game
function updateGrid() {
    const newGrid = new Array(rows).fill(null).map(() => new Array(cols).fill(false));
    let newPopulation = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const liveNeighbors = countLiveNeighbors(row, col);

            if (grid[row][col]) {
                // Cell is alive
                newGrid[row][col] = liveNeighbors === 2 || liveNeighbors === 3;
            } else {
                // Cell is dead
                newGrid[row][col] = liveNeighbors === 3;
            }

            if (newGrid[row][col]) {
                newPopulation++;
            }
        }
    }

    grid.splice(0, grid.length, ...newGrid);
    population = newPopulation;
    populationElement.textContent = population + '/' + startPopulation;
}

// count the total number of cells
function countPopulation() {
    return grid.flat().filter(cellState => cellState).length;
}

// Start the game
function startGame() {
    startPopulation = population
    isPlaying = !isPlaying;
    if (isPlaying && population > 0) {
        playElement.textContent = 'Pause';
        play(speedRange.value);
    } else {
        playElement.textContent = 'Start';
        stop();
    }
}
function reloadGame() {
    location.reload()
}

// Play the game
function play(speed) {
    intervalId = setInterval(() => {
        updateGrid()
        generation++;
        generationElement.textContent = generation;
        updateUI();
        if (population == 0) {
            clearInterval(intervalId)
        }
    }, speed);
}

// Pause the game
function stop() {
    clearInterval(intervalId);
}

//Update the user interface based on the current state of the grid.
function updateUI() {
    const cells = document.getElementsByClassName('cell');
    grid.flat().forEach((cellState, index) => {
        const cell = cells[index];
        cell.classList.toggle('live', cellState);
    });
}

initializeGrid();

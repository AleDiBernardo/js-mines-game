/**
 * Handle start btn
 * @date 4/9/2024 - 4:02:42 PM
 */
function handleStartClick() {
  if (startClickCounter > 0) {
    playground.innerHTML = "";
    createGrid();
  } else {
    createGrid();
  }

  generateBombs();
}

/**
 * Create grid when start btn clicked
 * @date 4/9/2024 - 3:44:23 PM
 */
function createGrid() {
  console.log("Partita: " + startClickCounter);

  for (let i = 0; i < cellNum; i++) {
    cell = document.createElement("div");
    cell.classList.add("cell", "flex", "just-cont-ctr");
    cell.innerHTML = i + 1;
    cell.addEventListener("click", cellClicked);
    playground.append(cell);
  }

  startClickCounter++;
}

/**
 * Change color of cells when clicked
 * @date 4/9/2024 - 3:42:48 PM
 */
function cellClicked() {
  if (startClickCounter > 0) {
    this.style.backgroundColor = "lightsalmon";
  }

  if (bombs.includes(parseInt(this.innerHTML))) {
    this.style.backgroundColor = "red";
  } else {
    this.style.backgroundColor = "blue";
  }
  //debug
  console.log("cella numero: " + this.innerHTML);
}

function generateBombs(){
    let max = 100;
    let min = 0;
    let i = 0;
    while (i < bombNum) {
        bombs[i] = parseInt(Math.floor(Math.random() * (max - min)) + min);
        i++;
    }
    console.log("Array: "+bombs);
}

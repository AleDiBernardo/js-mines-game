/**
 * Handle start btn
 * @date 4/9/2024 - 4:02:42 PM
 */
function handleStartClick() {
  playground.style.pointerEvents = "auto";

  if (startClickCounter > 0) {
    playground.innerHTML = "";
    cell.style.backgroundColor = "lightsalmon";
    result.innerHTML = "";
    bombs = [];
    points = 0;

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
  if (bombs.includes(parseInt(this.innerHTML))) {
    this.style.backgroundColor = "red";
    result.innerHTML = `Hai perso dopo ${points + 1} tentativi`;
    playground.style.pointerEvents = "none";
  } else {
    this.style.backgroundColor = "blue";

    if (points + bombs.length + 1 === cellNum) {
      result.innerHTML = `HAI VINTO`;
    }
    points++;
  }
  this.innerHTML = "";

  console.log(points);
  this.removeEventListener("click", cellClicked);

  //debug
}

/**
 * Fill bomb array with random number from 0 to 99
 * @date 4/9/2024 - 4:57:39 PM
 */
function generateBombs() {
  while (bombs.length < bombNum) {
    let randomNumber = Math.floor(Math.random() * (cellNum - 0)) + 1;
    if (!bombs.includes(randomNumber)) {
      bombs.push(randomNumber);
    }
  }

  //cheat
  console.log("BOMBE: ", bombs);
}

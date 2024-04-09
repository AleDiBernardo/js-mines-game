function createGrid() {
  if (startClickCounter > 0) {
  } else {
    for (let i = 0; i < dimension; i++) {
      cell = document.createElement("div");
      cell.classList.add("cell", "flex", "just-cont-ctr");
      cell.innerHTML = i + 1;
      cell.addEventListener("click", cellClicked);
      playground.append(cell);
    }
  }
  startClickCounter++;
}

function cellClicked() {
  if (startClickCounter > 0) {
    this.style.backgroundColor = "lightsalmon";
  }
  console.log("cella: " + this.innerHTML);
  this.style.backgroundColor = "blue";
}

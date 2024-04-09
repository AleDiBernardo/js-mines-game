const startBtn = document.getElementById("start-game");
let playground = document.getElementById("playground");
let cell;

let dimension = 100;
let startClickCounter=0;

startBtn.addEventListener("click", createGrid);
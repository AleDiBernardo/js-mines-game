const startBtn = document.getElementById("start-game");
let playground = document.getElementById("playground");
let cell;
let bombs = [];

let cellNum = 100;
let bombNum = 15;
let startClickCounter=0;

startBtn.addEventListener("click", handleStartClick);
// generateBombs();
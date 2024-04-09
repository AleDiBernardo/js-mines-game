const startBtn = document.getElementById("start-game");
let playground = document.getElementById("playground");
const result = document.getElementById("result");

let cell;
let bombs = [];
let points = 0;

let cellNum = 10;
let bombNum = 0;
let startClickCounter=0;

startBtn.addEventListener("click", handleStartClick);


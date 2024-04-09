const startBtn = document.getElementById("start-game");
let playground = document.getElementById("playground");
const result = document.getElementById("result");


let cell;
let bombs = [];
let points = 0;

let cellNum = 100;
let bombNum = 15;
let startClickCounter=0;

startBtn.addEventListener("click", handleStartClick);

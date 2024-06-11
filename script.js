import { stats } from "./stats.js";
import { gameBoard } from "./gameBoard.js";

const boxes = Array.from(document.querySelectorAll(".box"));
const restartBtn = document.getElementById("restart-btn");
const startBtn = document.getElementById("start-btn");
const board = document.getElementById("board");
board.style.pointerEvents = "none";

startBtn.addEventListener("click", () => {
  gameBoard.restart();
});

restartBtn.addEventListener("click", () => {
  stats.restart();
  gameBoard.restart();
});

boxes.forEach((el) =>
  el.addEventListener("click", (e) => {
    let target = e.currentTarget;
    gameBoard.handlePlay(Number(target.id));
  })
);

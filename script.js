import { stats } from "./stats.js";
import { gameBoard } from "./gameBoard.js";

const boxes = Array.from(document.querySelectorAll(".box"));
const restartBtn = document.getElementById("restart-btn");
const startBtn = document.getElementById("start-btn");
const startGameBtn = document.getElementById("start-game");
const boardContainer = document.getElementById("board-container");
const playersDiv = document.getElementById("players-div");
const landing = document.getElementById("landing");

startBtn.addEventListener("click", () => {
  landing.classList.add("disabled");
  playersDiv.classList.remove("disabled");
});
startGameBtn.addEventListener("click", () => {
  playersDiv.classList.add("disabled");
  let nameOne = document.getElementById("player-one-input").value;
  let nameTwo = document.getElementById("player-two-input").value;
  stats.setNames({ nameOne, nameTwo });
  gameBoard.toggleTurn();
  boardContainer.classList.remove("disabled");
});

restartBtn.addEventListener("click", () => {
  gameBoard.restart();
  if (stats.getIsGameDone()) stats.restart();
});

boxes.forEach((el) =>
  el.addEventListener("click", (e) => {
    let target = e.currentTarget;
    gameBoard.handlePlay(Number(target.id));
  })
);

boxes.forEach((el) =>
  el.addEventListener("mouseenter", (e) => {
    let target = e.currentTarget;
    if (target.children.length > 0) return;
    target.innerHTML = gameBoard.generateIcon(gameBoard.getTurn(), true);
  })
);

boxes.forEach((el) =>
  el.addEventListener("mouseleave", (e) => {
    let target = e.currentTarget;
    if (target.innerHTML && target.children[0]?.classList?.contains("i-ph")) {
      target.innerHTML = "";
    }
  })
);

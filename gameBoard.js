export const gameBoard = (function () {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let board = ["", "", "", "", "", "", "", "", ""];
  const restartBtn = document.getElementById("restart-btn");
  const startBtn = document.getElementById("start-btn");
  const boardElement = document.getElementById("board");
  const boxes = Array.from(document.querySelectorAll(".box"));
  const turn = document.getElementById("turn");
  let isXTurn = false;

  const getTurn = () => (isXTurn ? "X" : "O");

  function toggleTurn() {
    isXTurn = !isXTurn;
    turn.innerText = `${getTurn()}'s turn`;
  }

  function generateIcon(letter) {
    if (!letter) return "";
    let iconName = letter === "X" ? "fa-x" : "fa-o";
    return `<i class="fa-solid ${iconName}"></i>`;
  }

  function handlePlay(i) {
    let box = document.getElementById(`${i}`);
    board[i] = getTurn();
    box.style.pointerEvents = "none";
    refreshDisplay();
    let won = checkWinner();
    if (!won) toggleTurn();
  }

  function colorWin(win) {
    for (let i of win) {
      let box = document.getElementById(i.toString());
      box.classList.add("winner-box");
    }
  }

  function checkWinner() {
    for (let win of wins) {
      const areAllSame =
        board[win[0]] === board[win[1]] && board[win[0]] === board[win[2]];
      if (areAllSame && board[win[0]]) {
        turn.innerText = `${getTurn()} won`;
        colorWin(win);
        boxes.forEach((b) => (b.style.pointerEvents = "none"));
        return true;
      }
    }
    return false;
  }
  function refreshDisplay() {
    for (let i = 0; i < board.length; i++) {
      let box = document.getElementById(i);
      box.innerHTML = generateIcon(board[i]);
      box.style.pointerEvents = board[i] ? "none" : "all";
      box.classList.remove("winner-box");
    }
  }

  function restart() {
    board = ["", "", "", "", "", "", "", "", ""];
    refreshDisplay();
    isXTurn = false;
    toggleTurn();
  }

  return { restart, handlePlay };
})();

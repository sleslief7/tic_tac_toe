export const stats = (function () {
  let player1 = 0;
  let player1Stat = document.getElementById("player-1");
  let player2 = 0;
  let player2Stat = document.getElementById("player-2");
  let rounds = 0;
  let roundsStat = document.getElementById("rounds");
  let ties = 0;
  let tiesStat = document.getElementById("ties");
  let winner = "";
  let winnerStat = document.getElementById("winner");

  function addPlayer1() {
    player1++;
    player1Stat.innerHTML = player1;
  }
  function addPlayer2() {
    player2++;
    player2Stat.innerHTML = player2;
  }
  function addRounds() {
    rounds++;
    roundsStat.innerHTML = rounds;
  }
  function addTies() {
    ties++;
    tiesStat.innerHTML = ties;
  }
  function displayWinner() {
    winner = player1 > player2 ? "Player 1" : "Player 2";
    winnerStat.innerHTML = winner;
  }
  function restart() {
    player1 = 0;
    player1Stat.innerHTML = player1;
    player2 = 0;
    player2Stat.innerHTML = player2;
    rounds = 0;
    roundsStat.innerHTML = rounds;
    ties = 0;
    tiesStat.innerHTML = ties;
    winner = "";
    winnerStat.innerHTML = winner;
  }

  return { addPlayer1, addPlayer2, addRounds, addTies, displayWinner, restart };
})();

export const stats = (function () {
  let playerOneScore = 0;
  let playerTwoScore = 0;
  let playerOneName = "Player One";
  let playerTwoName = "Player Two";
  let playerOneStat = document.getElementById("player-one");
  let playerTwoStat = document.getElementById("player-two");

  let isGameDone = false;
  let ties = 0;
  let rounds = 0;
  let maxRounds = 3;
  let tiesStat = document.getElementById("ties");
  let roundsStat = document.getElementById("rounds");

  const restartBtn = document.getElementById("restart-btn");

  function refreshStats() {
    roundsStat.innerHTML = rounds;
    tiesStat.innerHTML = ties;
    playerOneStat.innerHTML = `${playerOneName}: ${playerOneScore}`;
    playerTwoStat.innerHTML = `${playerTwoName}: ${playerTwoScore}`;
  }

  function addPlayerOne() {
    playerOneScore++;
    refreshStats();
  }
  function addPlayerTwo() {
    playerTwoScore++;
    refreshStats();
  }
  function addRounds() {
    rounds++;
    refreshStats();
  }
  function addTies() {
    ties++;
    refreshStats();
  }
  function restart() {
    playerOneScore = 0;
    playerTwoScore = 0;
    rounds = 0;
    ties = 0;
    refreshStats();
    isGameDone = false;
  }
  function displayWinner() {
    const turn = document.getElementById("turn");
    let winner =
      playerOneScore > playerTwoScore ? playerOneName : playerTwoName;
    let winnerScore =
      playerOneScore > playerTwoScore ? playerOneScore : playerTwoScore;

    if (playerOneScore === playerTwoScore && rounds >= maxRounds) {
      turn.innerHTML = `It's a tie! Both players won ${playerOneScore} of ${maxRounds} rounds!`;
      restartBtn.innerText = `Restart`;
      isGameDone = true;
    } else if (rounds >= maxRounds && ties !== maxRounds) {
      turn.innerHTML = `${winner} won ${winnerScore} of ${maxRounds} rounds!`;
      restartBtn.innerText = `Restart`;
      isGameDone = true;
    } else if (rounds >= maxRounds && ties === maxRounds) {
      turn.innerHTML = `Nobody won any of the ${maxRounds} rounds, try it again!`;
      restartBtn.innerText = `Restart`;
      isGameDone = true;
    }
    return false;
  }

  function setNames({ nameOne, nameTwo }) {
    playerOneName = nameOne;
    playerTwoName = nameTwo;
    refreshStats();
  }

  const getIsGameDone = () => isGameDone;

  return {
    addPlayerOne,
    addPlayerTwo,
    addRounds,
    addTies,
    restart,
    setNames,
    displayWinner,
    getIsGameDone,
  };
})();

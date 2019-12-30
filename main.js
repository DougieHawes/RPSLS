const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const yourChoice = document.getElementById('your-choice');
const sheldonsChoice = document.getElementById('sheldons-choice');
const scoreboard = {
  you: 0,
  sheldon: 0
};

scorecard1.innerHTML = `${scoreboard.you}`;
scorecard2.innerHTML = `${scoreboard.sheldon}`;

let gameResult = 'make your choice';
result.innerHTML = `${gameResult}`;

function play(e) {
  const yourChoice = e.target.id;
  const sheldonsChoice = getSheldonsChoice();
  const winner = getWinner(yourChoice, sheldonsChoice);
  showWinner(winner, yourChoice, sheldonsChoice);
}

function getSheldonsChoice() {
  const rand = Math.random();
  if (rand < 0.2) {
    return 'rock';
  } else if (rand <= 0.4) {
    return 'paper';
  } else if (rand <= 0.6) {
    return 'scissors';
  } else if (rand <= 0.8) {
    return 'lizard';
  } else {
    return 'spock';
  }
}

function getWinner(y, s) {
  if (y === s) {
    gameResult = 'DRAW';
    return 'draw';
  } else if (y === 'rock') {
    if (s === 'paper') {
      gameResult = 'PAPER wraps ROCK, SHELDON wins';
      return 'sheldon';
    } else if (s === 'scissors') {
      gameResult = 'ROCK smashes SCISSORS, YOU win';
      return 'you';
    } else if (s === 'lizard') {
      gameResult = 'ROCK crushes LIZARD, YOU win';
      return 'you';
    } else {
      gameResult = 'SPOCK vaporises ROCK, SHELDON wins';
      return 'sheldon';
    }
  } else if (y === 'paper') {
    if (s === 'rock') {
      gameResult = 'PAPER wraps ROCK, YOU win';
      return 'you';
    } else if (s === 'scissors') {
      gameResult = 'SCISSORS cuts PAPER, SHELDON wins';
      return 'sheldon';
    } else if (s === 'lizard') {
      gameResult = 'LIZARD eats PAPER, SHELDON wins';
      return 'sheldon';
    } else {
      gameResult = 'PAPER disproves SPOCK, YOU win';
      return 'you';
    }
  } else if (y === 'scissors') {
    if (s === 'rock') {
      gameResult = 'ROCK smashes SCISSORS, SHELDON wins';
      return 'sheldon';
    } else if (s === 'paper') {
      gameResult = 'SCISSORS cuts PAPER, YOU win';
      return 'you';
    } else if (s === 'lizard') {
      gameResult = 'SCISSORS decaptiates LIZARD, YOU win';
      return 'you';
    } else {
      gameResult = 'SPOCK smashes SCISSORS, SHELDON wins';
      return 'sheldon';
    }
  } else if (y === 'lizard') {
    if (s === 'rock') {
      gameResult = 'ROCK crushes LIZARD, SHELDON wins';
      return 'sheldon';
    } else if (s === 'paper') {
      gameResult = 'LIZARD eats PAPER, YOU win';
      return 'you';
    } else if (s === 'scissors') {
      gameResult = 'SCISSORS decaptiates LIZARD, SHELDON wins';
      return 'sheldon';
    } else {
      gameResult = 'LIZARD poisons SPOCK, YOU win';
      return 'you';
    }
  } else {
    if (s === 'rock') {
      gameResult = 'SPOCK vaporises ROCK, YOU win';
      return 'you';
    } else if (s === 'paper') {
      gameResult = 'PAPER disproves SPOCK, SHELDON wins';
      return 'sheldon';
    } else if (s === 'scissors') {
      gameResult = 'SPOCK smashes SCISSORS, YOU win';
      return 'you';
    } else {
      gameResult = 'LIZARD poisons SPOCK, SHELDON wins';
      return 'sheldon';
    }
  }
}

function showWinner(winner, y, s) {
  if (winner === 'you') {
    scoreboard.you++;
    result.innerHTML = `${gameResult}`;
    yourChoice.innerHTML = `<img class='result-image' src="./images/${y}.png" alt=""/>`;
    sheldonsChoice.innerHTML = `<img class='result-image' src="./images/${s}.png" alt=""/>`;
  } else if (winner === 'sheldon') {
    scoreboard.sheldon++;
    result.innerHTML = `${gameResult}`;
    yourChoice.innerHTML = `<img class='result-image' src="./images/${y}.png" alt=""/>`;
    sheldonsChoice.innerHTML = `<img class='result-image' src="./images/${s}.png" alt=""/>`;
  } else {
    result.innerHTML = `${gameResult}`;
    yourChoice.innerHTML = `<img class='result-image' src="./images/${y}.png" alt=""/>`;
    sheldonsChoice.innerHTML = `<img class='result-image' src="./images/${s}.png" alt=""/>`;
  }

  scorecard1.innerHTML = `${scoreboard.you}`;
  scorecard2.innerHTML = `${scoreboard.sheldon}`;
}

choices.forEach(choice => choice.addEventListener('click', play));

function restartGame() {
  scoreboard.you = 0;
  scoreboard.sheldon = 0;

  gameResult = 'make your choice';

  scorecard1.innerHTML = `${scoreboard.you}`;
  scorecard2.innerHTML = `${scoreboard.sheldon}`;

  result.innerHTML = `${gameResult}`;
}

restart.addEventListener('click', restartGame);

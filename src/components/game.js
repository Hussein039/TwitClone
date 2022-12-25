import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';

const choices = ['rock', 'paper', 'scissors'];

const Game = () => {

    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);

  const play = choice => {
    setPlayerChoice(choice);
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
    setResult(determineWinner(choice, computerChoice));
  };

  const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return 'draw';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
      return 'player';
    } else {
      return 'computer';
    }
  };

  return (
    <div className="rock-paper-scissors">
      <h1>Rock, Paper, Scissors</h1>
      <div className="choices">
        <button onClick={() => play('rock')}>Rock</button>
        <button onClick={() => play('paper')}>Paper</button>
        <button onClick={() => play('scissors')}>Scissors</button>
      </div>
      {playerChoice && (
        <div className="result">
          <p>You chose {playerChoice}</p>
          <p>The computer chose {computerChoice}</p>
          <p className={result}>
            {result === 'player' && 'You win!'}
            {result === 'computer' && 'You lose :('}
            {result === 'draw' && "It's a draw"}
          </p>
        </div>
      )}
    </div>
  );

};


export default Game
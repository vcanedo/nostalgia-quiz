import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import SpaceInvaders from '../img/space-invaders.svg';

import './Welcome.css';

const Welcome = () => {

  const quizState = useContext(QuizContext)

  console.log(quizState);

  return (
    <div id="welcome">
      <h2>Welcome!</h2>
      <p>Click on the button to begin</p>
      <button>Begin</button>
      <img src={SpaceInvaders} alt="Quiz Start" />
    </div>
  )
}

export default Welcome

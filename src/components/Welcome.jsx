import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import SpaceInvaders from '../img/space-invaders.svg';

import './Welcome.css';

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="welcome">
      <h2>Welcome!</h2>
      <p>Click on the button to begin</p>
      <button onClick={() => dispatch({type: "CHANGE_STATE"})}>
        Begin
      </button>
      <img src={SpaceInvaders} alt="Quiz Start" />
    </div>
  )
}

export default Welcome

// import React from 'react'

import SpaceInvaders from '../img/space-invaders.svg';

const Welcome = () => {
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

import React from 'react';

import { CoachContainer } from './style';

class Coach extends React.Component {
  state = {
    delayBetweenCombos: 5000,
    combos: [1, 2, 3, 4],
    isPaused: true, 
  }

  togglePausedState = () => {
    this.setState(prevState => ({
      isPaused: !prevState.isPaused
    }));
  }

  render() {
    const { isPaused } = this.state; 

    return(
      <CoachContainer>
        <button onClick={this.togglePausedState}>{isPaused ? 'Play' : 'Pause'}</button>
      </CoachContainer>
    );
  }
}

export default Coach; 
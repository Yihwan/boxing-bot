import React from 'react';

import { 
  CoachContainer,
  CurrentCombo,  
} from './style';

class Coach extends React.Component {
  state = {
    delayBetweenCombos: 5000,
    combos: [1, 2, 3, 4],
    isTimerOn: false, 
    currentCombo: 1, 
  }

  startTimer = () => {
    this.setState({ isTimerOn: true });
    const { delayBetweenCombos } = this.state; 

    this.timer = setInterval(this.selectRandomCombo, delayBetweenCombos);
  }

  stopTimer = () => {
    this.setState({ isTimerOn: false });
    clearInterval(this.timer);
  }

  selectRandomCombo = () => {
    const { combos } = this.state; 
    const newCombo = combos[Math.floor(Math.random() * combos.length)];
    
    console.log(newCombo);
    this.setState({ currentCombo: newCombo });
  }

  changeDelay = (event) => {
    const { delayBetweenCombos } = this.state;
    const newDelay = event.currentTarget.value;
    
    if (delayBetweenCombos !== newDelay) {
      this.setState({ delayBetweenCombos: newDelay });

      this.stopTimer();
      this.startTimer();
    }
  }

  render() {
    const { isTimerOn, currentCombo, delayBetweenCombos } = this.state; 

    return(
      <CoachContainer>
        <CurrentCombo>{currentCombo}</CurrentCombo>

        <div>
          <label htmlFor="delayBetweenCombos">Delay between combos: {delayBetweenCombos / 1000}</label>
          <input 
            type="range" 
            id="delayBetweenCombos" 
            name="delayBetweenCombos" 
            min="1000"
            max="10000"
            step="1000"
            value={delayBetweenCombos}
            onChange={this.changeDelay}
          /> 
        </div>

        {isTimerOn ? 
          <button onClick={this.stopTimer}>Pause</button> : 
          <button onClick={this.startTimer}>Play</button>
        }
      </CoachContainer>
    );
  }
}

export default Coach; 
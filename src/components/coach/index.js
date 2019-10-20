import React from 'react';

import { 
  OneCount,
  TwoCount, 
  ThreeCount,
  FourCount,
  FiveCount, 
} from 'src/assets/count';

import { 
  CoachContainer,
  CurrentCombo,  
} from './style';

class Coach extends React.Component {
  state = {
    delayBetweenCombos: 5000,
    isTimerOn: false, 
    currentCombo: 'Ready', 
    comboCountMap: {
      1: OneCount,
      2: TwoCount,
      3: ThreeCount,
      4: FourCount,
      5: FiveCount,
    }
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
    const { comboCountMap } = this.state; 
    const combos = Object.keys(comboCountMap);
    const newCombo = combos[Math.floor(Math.random() * combos.length)];
    
    this.setState({ currentCombo: newCombo });

    this.sayComboCount();
  }

  sayComboCount = () => {
    const { comboCountMap, currentCombo }  = this.state;
    const count = new Audio(comboCountMap[currentCombo]);

    count.play();
  }

  changeDelay = (event) => {
    
    const { delayBetweenCombos } = this.state;
    const newDelay = event.currentTarget.value;
    
    if (delayBetweenCombos !== newDelay) {
      this.stopTimer();
      this.setState({ delayBetweenCombos: newDelay });
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
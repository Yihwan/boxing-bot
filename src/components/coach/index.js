import React from 'react';

import { 
  OneCount,
  TwoCount, 
  ThreeCount,
  FourCount,
  FiveCount, 
} from 'src/assets/count';

import { 
  CoachOuterContainer,
  CoachContainer,
  TitleContainer,
  CurrentComboContainer,
  CurrentCombo,  
  FieldSet,
  StartStopButton
} from './style';

const START_MESSAGE = `🥊 🤖 🥊`;
const READY_MESSAGE = 'Get ready ...';

class Coach extends React.Component {
  state = {
    delayBetweenCombos: 7000,
    isTimerOn: false, 
    currentCombo: START_MESSAGE, 
    comboCountMap: {
      1: OneCount,
      2: TwoCount,
      3: ThreeCount,
      4: FourCount,
      5: FiveCount,
    },
    numberOfCombos: 4,
  }

  startTimer = () => {
    this.setState({ isTimerOn: true });
    const { delayBetweenCombos } = this.state; 

    this.timer = setInterval(this.selectRandomCombo, delayBetweenCombos);
    this.setState({ currentCombo: READY_MESSAGE});
  }

  stopTimer = () => {
    this.setState({ isTimerOn: false });
    clearInterval(this.timer);
  }

  selectRandomCombo = () => {
    const { comboCountMap, numberOfCombos } = this.state; 
    const combos = Object.keys(comboCountMap);
    const newCombo = combos[Math.floor(Math.random() * numberOfCombos)];
    
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

  changeNumberOfCombos = (event) => {
    const { numberOfCombos } = this.state;
    const newNumberOfCombos = event.currentTarget.value;
    
    if (numberOfCombos !== newNumberOfCombos) {
      this.stopTimer();
      this.setState({ numberOfCombos: newNumberOfCombos });
    }
  }
  render() {
    const { isTimerOn, currentCombo, numberOfCombos, delayBetweenCombos } = this.state; 

    return(
      <CoachOuterContainer>
        <CoachContainer>
          <TitleContainer isTimerOn={isTimerOn}>Boxing Bot</TitleContainer>
          <CurrentComboContainer>
            <CurrentCombo isComboDisplayed={Number.isInteger(parseInt(currentCombo, 10))}>{currentCombo}</CurrentCombo>
          </CurrentComboContainer>

          <FieldSet>
            <label htmlFor="numberOfCombos">Number of combos: <span>{numberOfCombos} combo options</span></label>
            <input 
              type="range" 
              id="numberOfCombos" 
              name="numberOfCombos" 
              min="1"
              max="5"
              step="1"
              value={numberOfCombos}
              onChange={this.changeNumberOfCombos}
            /> 

            <label htmlFor="delayBetweenCombos">Delay between combos: <span>{delayBetweenCombos / 1000} seconds</span></label>
            <input 
              type="range" 
              id="delayBetweenCombos" 
              name="delayBetweenCombos" 
              min="1000"
              max="30000"
              step="1000"
              value={delayBetweenCombos}
              onChange={this.changeDelay}
            /> 
          </FieldSet>

          {isTimerOn ? 
            <StartStopButton isTimerOn={isTimerOn} onClick={this.stopTimer}>Stop</StartStopButton> : 
            <StartStopButton isTimerOn={isTimerOn} onClick={this.startTimer}>Start</StartStopButton>
          }
        </CoachContainer>
      </CoachOuterContainer>
    );
  }
}

export default Coach; 
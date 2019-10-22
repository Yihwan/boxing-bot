import styled from '@emotion/styled';

export const CoachOuterContainer = styled.main`
  display: flex; 
  justify-content: center; 
  align-items: center;
  width: 100vw; 
  height: 100vh;
  background-color: #1B1B1D;
`;

export const CoachContainer = styled.div`
  background-color: #f4f4f5;
  display: flex; 
  flex-direction:column;
  width: 80%;
  max-width: 400px; 
  border-radius: 5px; 
  padding-bottom: 16px;
`;

export const TitleContainer = styled.h1`
  text-align: center;
  padding: 1rem;
  font-size: 2.25rem;
  font-weight: 700;
  background-color: ${({ isTimerOn }) => isTimerOn ? '#21ce99' : '#f45531'};
  color: #f4f4f5;
  letter-spacing: 0.01em;
  border-radius: 5px 5px 0 0; 
`;

export const CurrentComboContainer = styled.div`
  display: flex; 
  height: 12rem;
  justify-content: center;
  align-items: center; 
  letter-spacing: 0.01em;
`;

export const CurrentCombo = styled.h2`
  font-size: ${({ isComboDisplayed }) => isComboDisplayed ? '6rem' : '3rem'};
  font-weight: 600;
`;

export const FieldSet = styled.fieldset`
  padding: 0 1rem;
  letter-spacing: 0.005em;

  > label { 
    display: block;
    margin-bottom: 0.75rem;

    > span {
      font-weight: 600;
    }
  }

  > input[type="range"] {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const StartStopButton = styled.button`
  padding: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: .01em;
  width: 60%;
  margin: 1rem auto;
  border-radius: 5px; 
  border: 0;
  color: #f4f4f4;
  background-color: ${({ isTimerOn }) => isTimerOn ? '#f45531' : '#21ce99'};
  cursor: pointer;
`;
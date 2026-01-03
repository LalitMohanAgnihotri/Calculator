import { useState } from 'react';
import styles from './App.module.css';
import Display from './components/Display.jsx';
import ButtonContainer from './components/ButtonContainer.jsx';

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === 'AC') {
      setCalVal("");
    } else if (buttonText === '=') {
      try {
        // Evaluate the string and convert back to string
        const result = eval(calVal);
        setCalVal(String(result));
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      // Handle 'x' as '*' for calculation
      const valToAdd = buttonText === 'x' ? '*' : buttonText;
      setCalVal(calVal + valToAdd);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
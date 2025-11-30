import { useState } from 'react'

import styles from './App.module.css'
import Display from './components/Display.jsx'
import ButtonContainer from './components/ButtonContainer.jsx'

function App() {
  const [calVal,setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === 'AC'){
      setCalVal("");
      return;
    }
    else if(buttonText === '='){
      const result = eval(calVal);
      setCalVal(result.toString()); 
    }
    else{
      const newVal = calVal + buttonText;
      setCalVal(newVal);
    }
  }

  return <div className={styles.calculator}>
    <Display displayValue={calVal} />
    <ButtonContainer onButtonClick={onButtonClick} />
  </div>
}

export default App

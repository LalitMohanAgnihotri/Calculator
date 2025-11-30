import styles from './ButtonContainer.module.css'
const ButtonContainer = ({onButtonClick}) => {
  const buttons = ['AC', '%', 'x', '/','7','8','9','*','5','6','7','-','3','2','1','+','00','0','.','='];
  return (
    <>
      <div className={styles.buttonContainer}>
        {buttons.map((btn)=><button className={styles.button} onClick={()=>onButtonClick(btn)}>{btn}</button>)}
      </div>
    </>
  );
};
export default ButtonContainer;

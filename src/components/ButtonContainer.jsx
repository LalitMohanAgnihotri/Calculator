import styles from './ButtonContainer.module.css';

const ButtonContainer = ({ onButtonClick }) => {
  // Organized buttons in a more standard calculator grid
  const buttons = [
    'AC', '%', '/', 'x', 
    '7', '8', '9', '*', 
    '4', '5', '6', '-', 
    '1', '2', '3', '+', 
    '0', '00', '.', '='
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttons.map((btn, index) => (
        <button 
          key={index} 
          className={styles.button} 
          onClick={() => onButtonClick(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
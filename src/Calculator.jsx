import React, {useState} from 'react'

function Calculator() {

  const [display, setDisplay] = useState('')
  
  const handleCut = () => {
    setDisplay(display.slice(0, -1));
   };

  const handleClick = (value) => {
    setDisplay(display+value);
  }; 

  const calculateResult = () => {
  try {
    const result = eval(display)
    setDisplay(result)
  }
 catch(error){setDisplay('Error')
 };
};

 const clearDisplay = () => {
  setDisplay('');
 };


  return (
    <>
      <div className='calculator'>
        <div className='display'>{display}</div>
        <div> 
          <button onClick={() => handleClick('7')}>7</button> 
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button> 
          <button onClick={() => handleClick('+')}>+</button>
        </div>
        <div>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('*')}>*</button>
        </div>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={calculateResult}>=</button>
      </div>
      <div>
          <button onClick={handleCut}>^</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={clearDisplay}>C</button>
        </div>
    </>
  );
};

export default Calculator;
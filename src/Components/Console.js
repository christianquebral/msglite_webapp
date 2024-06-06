import Input from './Input.js'
import { useState } from 'react';

function Console() {
  const [data, setData] = useState('');

  const inputToConsole = (event, inputData) => {
    if(event.keyCode === 13 && event.shiftKey === false) {
      setData(inputData);
      alert(inputData);
    }
  }

  return (
      <Input inputToConsole={inputToConsole}/>
  );
}

export default Console;

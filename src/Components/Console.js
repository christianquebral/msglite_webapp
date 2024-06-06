import Input from './Input.js'
import { useState } from 'react';

function Console() {
  const [data, setData] = useState([]);

  const inputToConsole = (event, inputData) => {
    if(event.keyCode === 13 && event.shiftKey === false) {
      setData([
        ...data,
        inputData
      ]);
    }
  }

  return (
      <>
      <Input inputToConsole={inputToConsole}/>
      <p class="message">
        {data.map(d => (<li>{d}</li>))}
      </p>
      </>
  );
}

export default Console;

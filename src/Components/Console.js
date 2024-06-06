import Input from './Input.js'
import { useState } from 'react';

function Console() {
  const [messages, setMessages] = useState([]);

  // Will be passed as a prop to the Input child component to
  // pass data back to parent and into the message array
  const inputToConsole = (event, inputData) => {
    if(event.keyCode === 13 && event.shiftKey === false) {
      setMessages([
        ...messages,
        inputData
      ]);
    }
  }

  return (
      <>
      <Input inputToConsole={inputToConsole}/>
      <p class="message">
        {messages.map(
            message => (<li>{message}</li>))
          }
      </p>
      </>
  );
}

export default Console;

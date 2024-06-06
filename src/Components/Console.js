import Input from './Input.js'
import { useState } from 'react';

function Console() {
  // initialize the main message queue
  const [messages, setMessages] = useState([]);

  const pushMessage = (messageData) => {
    // formatting string elements
    var d = new Date()
    var timestampStr = d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2) + " " + ('0' + d.getHours()).slice(-2) + ":" + ('0' + d.getMinutes()).slice(-2) + ":" + ('0' + d.getSeconds()).slice(-2);
    var user = "coce"

    var messageFormatted = `${timestampStr} | [${user}] ${messageData}`;
    
    setMessages([
      ...messages,
      messageFormatted
    ]);
  }

  // Will be passed as a prop to the Input child component to
  // pass data back to parent and into the message array
  const inputToConsole = (event, inputData) => {
    if(event.keyCode === 13 && event.shiftKey === false) {
      pushMessage(inputData);
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

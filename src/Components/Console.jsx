import Input from './Input.jsx'
import { useState } from 'react'

function Console() {
  // initialize the main message queue
  var systemMessage = [
      "Welcome to msglite v0.0.0!",
      "Type commands into the box below.",
      "Create a session: 'create session={desired session name} name={desired name}'",
      "Join a session: 'join session={session name} name={desired name}'",
      "...",
      "Example: 'create session=my-session name=Hubert'"
  ]
  const [messages, setMessages] = useState(systemMessage);
  var sessionActive = false;
  var sessionName = null;
  var userName = null;

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
      if (sessionActive === true) {
        pushMessage(inputData);
      }
      else {
        handleCommand(inputData);
      }
    }
  }

  const handleCommand = (inputData) => {
    // handle create command
    var inputArray = inputData.split(" ");
    if (inputArray.length === 3) {
      pushMessage("Meow");
    }
    else {
      pushMessage("Improperly formatted command! Please see examples above");
    }
  }

  const createSession = (inputData) => {

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

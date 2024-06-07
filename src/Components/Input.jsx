import { useRef, useEffect } from 'react';

function Input({inputToConsole}) {
  const inputRef = useRef(null);

  // Add event listener to the input box on render.
  useEffect(() => {
    inputRef.current.addEventListener("keydown", OnKeyDown);
    return () => {
      inputRef.current.removeEventListener("keydown", OnKeyDown);
    };
  }, []);

  return (
      <form>
        <span contenteditable>
          <textarea onKeyDown={(event) => inputToConsole(event, window.data)} ref={inputRef} class="input" type="text" id="input" required></textarea>
        </span>
      </form>

  );
}

// This function checks input for Enter (13) keypress and 
// assigns the value to the data object. Finally, the function
// resets the input value to blank
function OnKeyDown(event) {
  if(event.keyCode === 13 && event.shiftKey === false) {
    window.data = window.input.value;
    window.input.value = "";
  }
}

export default Input;

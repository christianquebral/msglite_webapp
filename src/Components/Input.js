import { useRef, useEffect } from 'react';

function Input({inputToConsole}) {
  const inputRef = useRef(null);

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

function OnKeyDown(event) {
  if(event.keyCode === 13 && event.shiftKey === false) {
    // also works
    window.data = window.input.value;
    window.input.value = "";
  }
}

export default Input;

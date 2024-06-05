import './App.css';

import Message from './Components/Message';
//import Input from './Components/Input'

function Input() {
  return (
      <form class="input" action="" method="post" onKeyDown={OnKeyDown}>
        <span contenteditable>
          <textarea type="text" id="inputValue" required></textarea>
        </span>
      </form>
  );
}

function OnKeyDown(e) {
  if(e.keyCode == 13 && e.shiftKey == false) {
      var input = document.getElementById("inputValue");
      // alert(input.value);
      input.value = "";
  }
}

function App() {
  return (
    <>
      <div class="message"><Message /></div>
      <div class="input"><Input /></div>
    </>
  )
}

export default App;

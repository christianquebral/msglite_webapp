import './App.css';


var messages = [
  '12:00:00t00:00:00 | [Aegey] My name is Aegey',
  '12:00:00t00:00:00 | [Ouillo] And I am Ouillo aka Racecar',
  '12:00:00t00:00:00 | [Buntonomer] I am Buntonomer, the most gracious being in existence',
  '12:00:00t00:00:00 | [Difo] I\'m Difo, I\'m going to kill Chridgn',
]

var messageMap = messages.map(message => <li>{message}</li>)

function Input() {
  return (
      <form class="input" action="" method="post" onKeyDown={OnKeyDown.bind(this)}>
        <span contenteditable>
          <textarea type="text" id="inputValue" required></textarea>
        </span>
      </form>
  );
}

function OnKeyDown(e) {
  if(e.keyCode === 13 && e.shiftKey === false) {
      var input = document.getElementById("inputValue");
      messages.push(input.value);
      input.value = "";
  }
}

function App() {
  return (
    <>
      <div class="message">
        <p class="message">{messageMap}
        </p>
      </div>
      <div class="input"><Input /></div>
    </>
  )
}

export default App;

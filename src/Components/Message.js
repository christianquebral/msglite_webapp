const messages = [
  '12:00:00t00:00:00 | [Aegey] My name is Aegey',
  '12:00:00t00:00:00 | [Ouillo] And I am Ouillo aka Racecar',
  '12:00:00t00:00:00 | [Buntonomer] I am Buntonomer, the most gracious being in existence',
  '12:00:00t00:00:00 | [Difo] I\'m Difo, I\'m going to kill Chridgn',
]

const listMessages = messages.map(message => <li>{message}</li>);

function Message() {
	return (
		<p class="message">{listMessages}</p>
	);
}

export default Message;

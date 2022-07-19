import './App.css';
import { useState } from 'react'


function App() {
  const [ name, setName] = useState('peter')
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  const handleClick = () => {
    setName('scarface')
    console.log(name)
  }
  return (
    <div className="App">
      <h2>My name is {name} </h2>
      {events.map((event) => [
        <ul key={event.id}>
          <li>{event.title}</li>
        </ul>
      ])}
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;

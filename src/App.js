import './App.css';
import { useState } from 'react'


function App() {
  const [ showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  console.log(showEvents)

  const handleClick = (id) => {
    setEvents((preEvents) => {
      return preEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }
  return (
    <div className="App">
      <div>
        <button onClick={() => setShowEvents(false) }>Hide me</button>
      </div>
      <div>
        <button onClick={() => setShowEvents(true) }>Show me</button>
      </div>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Name</button>
        </div>
      ))}
    </div>
  );
}

export default App;

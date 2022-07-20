import './App.css';
import { useState } from 'react'

//components
import  Title  from './components/Title'
import Modal from './components/Modal';


function App() {
  const [ showEvents, setShowEvents] = useState(true);
  const [ showModal, setShowModal ] = useState(false)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  const handleClick = (id) => {
    setEvents((preEvents) => {
      return preEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <div className="App">
      <button onClick={() => setShowModal(true) } >Show Modal</button>
      < Title Title = 'my first prop' />
      {showEvents && (<div>
        <button onClick={() => setShowEvents(false) }>Hide me</button>
      </div>)}
      {!showEvents && (<div>
        <button onClick={() => setShowEvents(true) }>Show me</button>
      </div>)}
      { showEvents && events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Name</button>
        </div>
      ))}
      { showModal && <Modal handleClose={handleClose} >
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p> 
      </Modal>}
    </div>
  );
}

export default App;

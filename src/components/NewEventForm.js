import { useState } from 'react'
import './NewEventForm.css'


export default function NewEventForm({addEvent}) {

  const [ title, setTitle ] = useState('');
  const [ date , setDate ] = useState('');
  const [ location, setLocation] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const handleReset = () => {
    setDate('');
    setTitle('');
    setLocation('');
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
      title : title,
      date: date,
      location: location,
      id: Math.floor(Math.random() *1000)
    }
    handleReset();
    addEvent(event)
    console.log(event)
  }

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input 
          type="text" 
          onChange={(e) => setTitle(e.target.value)} 
          value={title}
        />
      </label>

      <label>
        <span>Event Date</span>
        <input 
          type="date" 
          onChange={(e) => setDate(e.target.value)} 
          value={date}
        />
      </label>

      <label>
        <span>Location</span>
        <select onChange={(e) => setLocation(e.target.value) } >
          <option value="nigeria">Nigeria</option>
          <option value="kenya">kenya</option>
          <option value="mali">mali</option>
        </select>
      </label>

      <button>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </form>
  )
}

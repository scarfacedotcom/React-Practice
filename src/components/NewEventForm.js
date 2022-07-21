import { useState } from 'react'
import './NewEventForm.css'


export default function NewEventForm() {

  const [ title, setTitle ] = useState('');
  const [ date , setDate ] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const handleReset = () => {
    setDate('');
    setTitle('');
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
      title : title,
      date: date,
      id: Math.random(Math.floor *1000)
    }
    handleReset();
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

      <button>Submit</button>
      <button onClick={handleReset}>Reset</button>

      <p>Title- {title} , Date- {date} </p>
    </form>
  )
}

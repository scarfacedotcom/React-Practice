import React from 'react'
import styles from './EventList.module.css'

export default function EventList({handleClick, events}) {
  return (
    <div>
      {events.map((event) => (
        <div className={styles.card} key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.location} - {event.date} </p>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </div>
      ))}
    </div>
  )
}

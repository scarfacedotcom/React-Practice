import React from 'react'

export default function EventList({handleClick, events}) {
  return (
    <>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Name</button>
        </div>
      ))}
    </>
  )
}

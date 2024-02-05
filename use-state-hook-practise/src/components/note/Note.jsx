import React, {useState} from 'react'

const Note = () => {
    const [events, setEvents] = useState([
      { text: "Microsoft Lecture Ex", id: 1 },
      {text:"TedEx Lecture Roma ", id:2},
      { text: "XFactor for Human process", id: 3 },
      { text:"Trade for Human process", id:4},      
      {text:"Jumanji for Human process", id:5},     
    ])
    
    const handleDelete = (id) => {
        const filteredArray = events.filter((event) => {
            return event.id !== id;
        })

        setEvents(filteredArray);
    }
  return (
        <div className="d-flex mx-5 my-4">
          {events.map((event) => {
              return (
                  <div className='card flex-fill mx-2'>
                      <h5 className="card-header">Note id: {event.id}</h5>
                        <div className="card-body">
                        <p className="card-text">{event.text}</p>
                        <a href="#" className="btn btn-danger btn-block" onClick={() => {handleDelete(event.id)}}>Delete</a>
                        </div>
                  </div>
            )
        })}
        </div>
  )
}

export default Note

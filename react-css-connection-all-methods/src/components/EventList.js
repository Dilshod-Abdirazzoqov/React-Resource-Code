import React from "react";

//module css writing as object use for style
import style from "./EventList.module.css";

function EventList({ events, handleDelete }) {
  return (
    <div>
      {events.length === 0 && <h3>Not Content Yet :(</h3>}
      {events.map((event) => {
        return (
          <div className={style.card} key={event.id}>
            {/* Module Css writing */}
            <h2 className={style["card-header"]}>{event.title}</h2>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default EventList;

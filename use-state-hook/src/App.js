import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Changeable name : {name}</h1>
      <button onClick={handleClick}>Change Data</button>

      <div>
        <ul>
          {events.map((event) => {
            <li>{event.title}</li>;
          })}
        </ul>

        <button onClick={handleEvent}></button>
      </div>
    </div>
  );
}

export default App;

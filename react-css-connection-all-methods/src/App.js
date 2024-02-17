import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showConent, setShowContent] = useState(true);
  const [events, setEvents] = useState([
    { title: "akhror's birthday party", id: 1 },
    { title: "doniyor's live stream", id: 2 },
    { title: "match: manchester united vs barcelona", id: 3 },
  ]);

  // delete items
  const handleDelete = (id) => {
    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };

  let subtitle = "All events well be here :)";

  // toggle for modal
  const handleModal = () => {
    setShowModal(false);
  };

  // show modal for project
  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="App">
      <Title title="Akhror's Kingdom👑 Events" subtitle={subtitle} />
      <br />
      {showConent && (
        <button onClick={() => setShowContent(false)}>Hide Conent</button>
      )}
      {!showConent && (
        <button onClick={() => setShowContent(true)}>Show Conent</button>
      )}
      {showConent && <EventList events={events} handleDelete={handleDelete} />}

      {/* show modal for project */}
      <br />
      <button className="warning-btn" onClick={handleShowModal}>
        Show Modal
      </button>

      {showModal && (
        <Modal handleModal={handleModal} isModeModal={true}>
          <h1>You Tube channel | GameHub</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            culpa, alias libero deserunt exercitationem aliquid dolorum quam?
          </p>
        </Modal>
      )}
    </div>
  );
}

export default App;

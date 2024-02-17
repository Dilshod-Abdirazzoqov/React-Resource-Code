// style
import "./Modal.css";

// use react portal with react portal
import ReactDOM from "react-dom";

export default function Modal({ children, handleModal, isModeModal }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        //inline css writing
        style={{
          border: "2px solid",
          //dinamik css writing
          borderColor: isModeModal ? "blue" : "red",
          textAlign: "center",
        }}
      >
        {children}
        <button
          //dinamik class writing
          className={isModeModal ? "active" : "noactive"}
          onClick={handleModal}
        >
          Close Modal
        </button>
      </div>
    </div>,
    document.body
  );
}

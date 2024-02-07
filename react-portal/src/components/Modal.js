// style
import "./Modal.css";

// use react portal with react portal
import ReactDOM from "react-dom"

export default function Modal({ children, handleModal }) {
  return ReactDOM.createPortal((<div className="modal-backdrop">
  <div className="modal">
    {children}
    <button className="warning-btn" onClick={handleModal}>
      Close Modal
    </button>
  </div>
</div>), document.body)
}

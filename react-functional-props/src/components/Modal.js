// style
import './Modal.css'

export default function Modal({ children,closeModal }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <br />
        <hr />
        <br />
        <button className='warning-btn' onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

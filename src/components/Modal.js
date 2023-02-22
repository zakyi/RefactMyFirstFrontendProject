import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="modal-background"></div>
      <div className="modal-content">Modal</div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;

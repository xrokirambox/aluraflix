import styles from "./Modal.module.css";
import React from "react";
import { useModalContext } from "../../context/modal";

function Modal({children}) {
  const { isModalOpen, modalContent, closeModal } = useModalContext();

  const modalDisplay = isModalOpen ? "flex" : "none";

  if (!modalContent) {
    return null;
  }

  return (
    <>
        {isModalOpen && <div className={`modal-backdrop fade show ${styles.modalBackdrop}`}></div>}
        <div className="modal"  style={{ display: modalDisplay }}>
            <div className={`modal-dialog ${styles.modalDialog}`}>
                <div className={`container modal-content ${styles.modalContent}`}>
                <button className={`btn btn-outline-light ${styles.closeButton}`} onClick={closeModal}>X</button>
                <div className="modal-body">
                    {children}
                </div>
                </div>
            </div>
        </div>
    </>
    
  );
}

export default Modal;

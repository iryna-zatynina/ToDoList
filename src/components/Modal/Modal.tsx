import React,{Fragment} from 'react';
import "./Modal.scss";

interface ModalProps {
    closeModal: (preState: boolean) => void
}
const Modal = ({closeModal}: ModalProps) => {
    return (
        <Fragment>
            <div className="Modal">
                <h1>Title</h1>
                <button onClick={() => closeModal(false)}>Close modal</button>
            </div>
            <div className="BackSide"></div>
        </Fragment>
    );
};

export default Modal;
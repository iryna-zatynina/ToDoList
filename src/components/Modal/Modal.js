import React,{Fragment} from 'react';
import "./Modal.scss";

const Modal = ({closeModal}) => {
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
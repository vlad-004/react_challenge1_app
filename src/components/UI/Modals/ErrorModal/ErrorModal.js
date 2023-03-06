import './ErrorModal.css';
import Button from "../../Button/Button";
import React from "react";
import ReactDOM from "react-dom";

const Overlay = (props) => {
    return <div onClick={props.onCloseModal} className={"modal-overlay"}></div>
}

const Modal = (props) => {
    return (
        <div className={"modal"}>
            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={props.onCloseModal} className="close">&times;</span>
                    <h2>{props.errorData.title}</h2>
                </div>
                <div className="modal-body">
                    <p>{props.errorData.message}</p>
                </div>
                <div className="modal-footer">
                    <Button onClick={props.onCloseModal}>Закрыть</Button>
                </div>
            </div>
        </div>
    );
}


/**
 * Вызов модалки, текст ошибки передаем из пропсов
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(<Overlay onCloseModal={props.onCloseModal}/>,
                    document.getElementById('overlay'))
            }
            {
                ReactDOM.createPortal(<Modal onCloseModal={props.onCloseModal} errorData={props.errorData}/>,
                    document.getElementById('modal'))
            }
        </React.Fragment>
    );
}

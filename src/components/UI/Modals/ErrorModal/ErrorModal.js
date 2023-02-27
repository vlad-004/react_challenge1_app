import './ErrorModal.css';

/**
 * Вызов модалки, текст ошибки передаем из пропсов
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const ErrorModal = (props) => {
    const closeModalHandler = () => {
        props.onCloseModal();
    }

    return (
        <div id="myModal" className={props.modalState === 'show' ? "modal modal-show" : "modal"}>
            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={closeModalHandler} className="close">&times;</span>
                    <h2>{props.errorData.title}</h2>
                </div>
                <div className="modal-body">
                    <p>{props.errorData.message}</p>
                </div>
            </div>

            <div onClick={closeModalHandler} className={"modal-overlay"}></div>
        </div>
    );
}

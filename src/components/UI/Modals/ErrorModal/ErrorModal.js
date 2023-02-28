import './ErrorModal.css';
import Button from "../../Button/Button";

/**
 * Вызов модалки, текст ошибки передаем из пропсов
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const ErrorModal = (props) => {
    return (
        // <Card className={"modal"}>  //автор использует тут компонент Card, но в моем случае эо не принципиально и Card мне тут не нужен раз я уже все наверстал итак
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
                    {/*Кнопку закрытия я сделал сверху поэтому конструкция ниже лишь для того чтобы подразить автору курса и показать как использовать разный onclick аттрибут у кнопки */}
                    <Button onClick={props.onCloseModal}>Закрыть</Button>
                </div>
            </div>

            <div onClick={props.onCloseModal} className={"modal-overlay"}></div>
        </div>
    );
}

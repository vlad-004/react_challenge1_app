import {Card} from "../../UI/Card/Card";
import "./UserForm.css";
import Button from "../../UI/Button/Button";
import {useState, useRef, Fragment} from "react";
import {ErrorModal} from "../../UI/Modals/ErrorModal/ErrorModal";

export const UserForm = (props) => {

    const nameInputRef = useRef(); // шторм подсвечивает 16 строку. (Unresolved variable value) Автор собственно не ставит пустую строку по умолчанию и оно итак работает.
    const ageInputRef = useRef();

    const createUserHandler = (event) => {
        event.preventDefault();

        let newUserData = {
            name: nameInputRef.current.value,
            age: ageInputRef.current.value,
            id: Math.random().toString(),
        };

        //Автор курса делает валидацию прямо тут, не вынося в функцию, но как по мне так удобней.
        if (!validateInputData(newUserData)) {
            return;
        }

        props.onCreateUser(newUserData);

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    //я мог бы придумать лучше, но уже устал и не помню как бы это сделать лучше
    //выполняется вся валидация необходимая для выполнения задания , хотя я бы еще добавил парочку проверок
    const validateInputData = (newUserData) => {
        if (newUserData.name.trim().length === 0) {
            setErrorData({
                title: 'Заполните все поля',
                message: 'Имя должно быть заполненно',
            });
            return false;
        }

        if (newUserData.age.trim().length === 0) {
            setErrorData({
                title: 'Заполните все поля',
                message: 'Возраст должен быть заполнен',
            });
            return false;
        }
        if (+newUserData.age < 1) {
            setErrorData({
                title: 'Неверный возраст',
                message: 'Возраст должен быть больше 0',
            });
            return false;
        }


        return true;
    }

    let [errorData, setErrorData] = useState(); // object
    const errorHandler = () => {
        setErrorData(undefined); //автор тут передает false, но лучше чтобы типизация была наглядней исопльзовать null или undefined - я так считаю
    }

    return (
        <Fragment>
            {/*Это супер отличный способ вывода модалки, я не додумался до такого */}
            {errorData && <ErrorModal onCloseModal={errorHandler} errorData={errorData}/>}
            <Card>
                <form onSubmit={createUserHandler}>
                    <div className={"form-control"}>
                        <label htmlFor="userName">Имя</label>
                        <input name="userName" type="text" ref={nameInputRef}/>

                        <label htmlFor="userAge">Возраст</label>
                        <input name="userAge" type="text" ref={ageInputRef}/>

                        <Button type={"submit"}>Добавить юзера</Button>
                    </div>
                </form>
            </Card>
        </Fragment>
    );
}

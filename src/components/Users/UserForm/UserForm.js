import {Card} from "../../UI/Card/Card";
import "./UserForm.css";
import Button from "../../UI/Button/Button";
import {useState, Fragment} from "react";
import {ErrorModal} from "../../UI/Modals/ErrorModal/ErrorModal";

export const UserForm = (props) => {

    const [inputName, setInputName] = useState("");
    const [inputAge, setInputAge] = useState("");

    const createUserHandler = (event) => {
        event.preventDefault();

        let newUserData = {
            name: inputName,
            age: inputAge,
            id: Math.random().toString(),
        };

        //Автор курса делает валидацию прямо тут, не вынося в функцию, но как по мне так удобней.
        if (!validateInputData(newUserData)) {
            return;
        }

        props.onCreateUser(newUserData);

        setInputName('');
        setInputAge('');
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
        if (+newUserData.age < 1) {  // странный синтаксис преобразования в числовой тип TODO: артем можешь обьяснить это ?
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

    const nameChangeHandler = (event) => {
        setInputName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setInputAge(event.target.value)
    }

    return (
        <Fragment>
            {/*Это супер отличный способ вывода модалки, я не додумался до такого */}
            {errorData && <ErrorModal onCloseModal={errorHandler} errorData={errorData} />}
            <Card>
                <form onSubmit={createUserHandler}>
                    <div className={"form-control"}>
                        <label htmlFor="userName">Имя</label>
                        <input name="userName" type="text" value={inputName} onChange={nameChangeHandler}/>

                        <label htmlFor="userAge">Возраст</label>
                        <input name="userAge" type="text" value={inputAge} onChange={ageChangeHandler}/>

                        <Button type={"submit"} >Добавить юзера</Button>
                    </div>
                </form>
            </Card>
        </Fragment>
    );
}

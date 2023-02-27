import {Card} from "../../UI/Card/Card";
import "./UserForm.css";
import Button from "../../UI/Button/Button";
import {useState} from "react";

export const UserForm = (props) => {

    const [inputUserName, setInputUserName] = useState("");
    const [inputUserAge, setInputUserAge] = useState("");

    const formSubmitHandler = (event) => {
        event.preventDefault();

        let newUserData = {
            name: inputUserName,
            age: inputUserAge,
            id: Math.random(),
        };

        if (!filterInputData(newUserData)) {
            return;
        }

        props.onAddUser(newUserData);

        setInputUserName('');
        setInputUserAge('');
    }

    //я мог бы придумать лучше но уже устал и не помню как бы это сделать лучше
    //выполняется вся валидация необходимая для выполнения задания , хотя я бы еще добавил парочку проверок
    const filterInputData = (newUserData) => {
        if (newUserData.name.trim().length === 0) {
            props.onFormError({
                title: 'Заполните все поля',
                message: 'Имя должно быть заполненно',
            });
            return false;
        }

        if (newUserData.age.trim().length === 0) {
            props.onFormError({
                title: 'Заполните все поля',
                message: 'Возраст должен быть заполнен',
            });
            return false;
        }
        if (newUserData.age < '1') {
            props.onFormError({
                title: 'Неверный возраст',
                message: 'Возраст должен быть больше 0',
            });
            return false;
        }


        return true;
    }

    const userFormChangeHandler = (event) => {
        let inputValue = event.target.value;
        switch (event.target.name) {
            case "userAge":
                setInputUserAge(inputValue)
                break;
            case "userName":
                setInputUserName(inputValue)
                break;
            default:
                break;
        }
    }

    return <Card>
        <form onSubmit={formSubmitHandler}>
            <div className={"form-control"}>
                <label htmlFor="userName">Имя</label>
                <input name="userName" type="text" value={inputUserName} onChange={userFormChangeHandler}/>

                <label htmlFor="userAge">Возраст</label>
                <input name="userAge" type="text" value={inputUserAge} onChange={userFormChangeHandler}/>

                <Button type={"submit"}>Добавить юзера</Button>
            </div>
        </form>
    </Card>
}

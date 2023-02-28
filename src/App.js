import {UserForm} from "./components/Users/UserForm/UserForm";
import {UserList} from "./components/Users/UserList/UserList";
import "./App.css";
import {useState} from "react";

const App = () => {
    const [userList, setUserList] = useState([]);

    //TODO: Автор исопльзует вместо inputData 2 аргумента name,age - но это не гибко и чем больше будет инпутов в форме тем больше аргументов в этой функции
    const createUserHandler = (inputData) => {
        setUserList(prevUserList => {
            return [...prevUserList, inputData] // от перемены мест слагаемых зависит в каком порядке будут выводится данные
        });
    };

    return <div className={"main-content"}>
        <section id={"user-form"}>
            <UserForm onCreateUser={createUserHandler}/>
        </section>
        <section id={"user-list"}>
            <UserList users={userList}/>
        </section>
    </div>;
};

export default App;

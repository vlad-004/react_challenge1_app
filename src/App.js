import {UserForm} from "./components/Users/UserForm/UserForm";
import {UserList} from "./components/Users/UserList/UserList";
import "./App.css";
import {useState} from "react";
import {ErrorModal} from "./components/UI/Modals/ErrorModal/ErrorModal";

const App = () => {
    const [users, setUsers] = useState([]);
    const saveUserHandler = (inputData) => {
        setUsers(prevUsers => {
            return [inputData, ...prevUsers]
        });
    };
    const showErrorModalHandler = (errorData) => {
        setErrorData(errorData);
        setModalState('show');
    }

    let [errorData, setErrorData] = useState('');
    let [modalState, setModalState] = useState('hide');

    const closeModalHandler = () => {
        setModalState('hide');
        setErrorData('');
    }

    return <div className={"main-content"}>
        <section id={"user-form"}>
            <UserForm onFormError={showErrorModalHandler} onAddUser={saveUserHandler}/>
        </section>
        <section id={"user-list"}>
            <UserList users={users}/>
        </section>
        <ErrorModal modalState={modalState} errorData={errorData} onCloseModal={closeModalHandler}/>
    </div>;
};

export default App;

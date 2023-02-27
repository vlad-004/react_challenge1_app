import {Card} from "../../UI/Card/Card";
import "./UserList.css";

export const UserList = (props) => {
    return <Card className="user-list-content">
        <ul>
            {
                !props.users.length
                    ? ''
                    : props.users.map(
                        (user) => (
                            <li key={user.id}>
                                Имя: {user.name + ' Возраст: ' + user.age}
                            </li>
                        )
                    )
            }
        </ul>
    </Card>
}

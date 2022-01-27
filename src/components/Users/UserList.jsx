
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./UsersList.module.css"

const UserList = (props) => {
    const [err, setErr] = useState(null)
    const [data, setData] = useState([])
    const onClick = (event) => {
        setData(props.users.filter((el) => {
            return el.id !== event.target.id
        }))
        setErr(true)
    }

    const onConfirm = () => {
        setErr(null)
        props.onGet(data)
    } 

    
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} 
                        {user.indexOf}
                        ({user.age} years old)
                        <Button id={user.id} onClick={onClick}>Удалить</Button>
                        {err === true ? <ErrorModal title="Внимание!" message="Вы дейсытительно хотите удалить этого человека." id={user.id} arr={props.users} onConfirm={onConfirm}> <h1>hello</h1></ErrorModal> : null}
                    </li>
                ))}
            
            </ul>
        </Card>
    );
};

export default UserList;
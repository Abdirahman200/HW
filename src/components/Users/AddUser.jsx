import { useState } from "react";
import Card from "../UI/Card.jsx";
import classes from "./AddUser.module.css"
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal.jsx";

const AddUser = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState('');
    const [error, setError] = useState(null)

    const nameChangeHendler = (event) => {
        setName(event.target.value)
    }
    const ageChangeHendler = (event) => {
        setAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if(name.trim().length === 0 || age.trim().length === 0){
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non empty values)"
            })
            return;
        }
        if(+age < 1){
            setError({
                title: "Invalid input",
                massage: "Please enter a valid age (> 0)"
            })
            return;
        }

        props.onAddUSer(name,age)

        setName("")
        setAge('')
    }
        const errorHandler = () => {
            setError(null)
        }
        
        return (
            <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} ok={<Button onClick={errorHandler}>Okay</Button>}/>}
            <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            <label htmlFor="userNAme">UsrName</label>
            <input id="userNAme" type="text" value={name} onChange={nameChangeHendler}/>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" value={age} onChange={ageChangeHendler}/>
            <Button type="submit">Add User</Button>
            </form>
            </Card>
            </>
        
        
    );
};

export default AddUser;
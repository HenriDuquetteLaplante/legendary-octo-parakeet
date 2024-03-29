import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import {useState} from "react";
const AddUser = (props) => {

    const [enteredUserName, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if (+enteredAge < 1){
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    };

    return (
        <Card className={classes.input} >
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler}/>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type='submit' >Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;
import Button from "../UI/Button";
import css from "./UserInput.module.css"
const UserInput = () => {
    const formSubmitHandler = (event) => {
        event.preventDefault();

    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div
                className={css.formControl}
            >
                <label>Username</label>
                <input type="text"  />
                <label>Age (Years)</label>
                <input type="text"  />
            </div>
            <Button type="submit">Add User</Button>
        </form>
    );
}

export default UserInput;
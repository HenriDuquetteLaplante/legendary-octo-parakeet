import css from "./UserList.module.css"
import UserItem from "../UserItem/UserItem"
const UserList = () => {

    return (
        <ul className={css.userList}>
            <UserItem></UserItem>
        </ul>
    );
}

export default UserList;
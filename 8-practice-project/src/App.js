import './App.css';
import UserInput from "./components/UserInput/UserInput";
import {useState} from "react";
import UserList from "./components/UserList/UserList";

function App() {
    const [users, setUsers] = useState([]);

    let content = (
        <p style={{ textAlign: 'center' }}>No users found.</p>
    );

    if (users.length() > 0) {
        content = (
            <UserList />
        );
    }

    return (
    <div className="App">
        <section id="userForm">
            <UserInput></UserInput>
        </section>
            {content}
        <section>

        </section>
    </div>
  );
}

export default App;

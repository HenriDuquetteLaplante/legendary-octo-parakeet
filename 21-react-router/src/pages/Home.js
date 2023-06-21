import {Link} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
function HomePage() {
    return (
        <>
            <main>
                <h1>My home page</h1>
                <p>Got to <Link to='/products'> the list of products </Link></p>
            </main>
        </>
    );
}

export default HomePage;
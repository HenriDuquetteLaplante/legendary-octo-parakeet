import MainNavigation from "../components/MainNavigation";
import {Outlet} from "react-router";

const RootPage = () => {

    // const navigation =useNavigation();

    // navigation.state === ''

    return (
        <>
            <MainNavigation />
            <main>
                {/*{navigation.state === 'loading' && <p>Loading...</p>}*/}
                <Outlet />
            </main>
        </>
    )
}

export default RootPage;
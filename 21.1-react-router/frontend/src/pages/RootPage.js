import MainNavigation from "../components/MainNavigation";
import {Outlet} from "react-router";

const RootPage = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootPage;
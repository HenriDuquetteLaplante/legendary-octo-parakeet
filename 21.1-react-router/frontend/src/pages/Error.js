import PageContent from "../components/PageContent";
import {useRouteError} from "react-router";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    const error = useRouteError();

    let title = 'And error has occurred!';
    let message = 'Something went wrong!';

    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }

    if (error.status === 404) {
        title = 'Not found!'
        message = 'Could not find page'
    }

    return(
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>;
        </>
    );

}

export default ErrorPage;
import {Link, useRouteError} from "react-router-dom";

import styles from "./ErrorPage.module.scss"

export default function ErrorPage() {
    const error: any = useRouteError();

    return (
        <div className={styles["error-page"]}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText && error.error.message}</i>
            </p>

            <Link to="/">Back</Link>
        </div>
    );

}
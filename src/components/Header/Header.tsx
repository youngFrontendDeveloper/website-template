import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import Presentation from "../Presentation/Presentation";

import styles from "./Header.module.scss"


export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles["header__container"]}`}>
                <Logo footer={false} />
                <Nav />
            </div>
            {/*<Presentation />*/}

        </header>
    )
}
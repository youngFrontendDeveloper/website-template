import Menu from "../Menu/Menu";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import styles from "./Nav.module.scss";

export default function Nav() {

    return (
        <>
            <nav className={styles.nav}>
                <Menu />
                <BurgerMenu  />
            </nav>
        </>
    )
}
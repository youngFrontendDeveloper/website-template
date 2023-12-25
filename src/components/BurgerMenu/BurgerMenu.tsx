import burgerIcon from "../../images/burger-icon.svg";
import closeIcon from "../../images/close-icon.svg";

import styles from "./BurgerMenu.module.scss";
import {useMenuStore} from "../../store/store";

export default function BurgerMenu() {
    const {isMenuOpen, changeMenuOpen} = useMenuStore()

    return (
        <div className={styles["burger-menu"]} onClick={() => changeMenuOpen()}>
            <img
                className={styles["burger-menu__img"]}
                src={isMenuOpen ? closeIcon : burgerIcon}
                alt="Burger menu"
                width={30}
                height={30}
            />
        </div>
    )
}
import {Link} from "react-router-dom";
import PathConstants from "../../routes/pathConstants";
import {useEffect, useState} from "react";

import {useMenuStore} from "../../store/store";

import styles from "./Menu.module.scss"


export default function Menu() {
    const {isMenuOpen, changeMenuOpen} = useMenuStore();
    // const [widthWindow, setWidthWindow] = useState(0)

    // useEffect(() => {
    //     const getWindowWidth = () => {
    //         setWidthWindow(window.innerWidth)
    //     }
    //     window.addEventListener("resize", getWindowWidth)
    //     return () => window.removeEventListener("resize", getWindowWidth);
    //
    // }, [])

    return (

        <ul
            className={styles.menu}
            style={isMenuOpen ? {transform: "translateX(0)"} : {transform: "translateX(100%)"}}
            // style={(widthWindow >= 768) ? {display: "flex"} : isMenuOpen ? {display: "flex"} : {display: "none"}}
        >
            <li className={styles["menu__item"]} onClick={() => changeMenuOpen()}>
                <Link
                    className={`${styles["menu__link"]} link`} to={PathConstants.HOME}
                >Home</Link>
            </li>
            <li className={styles["menu__item"]} onClick={() => changeMenuOpen()}>
                <Link
                    className={`${styles["menu__link"]} link`} to={PathConstants.COUNTRIES}
                >Countries</Link>
            </li>
            <li className={styles["menu__item"]} onClick={() => changeMenuOpen()}>
                <Link
                    className={`${styles["menu__link"]} link`} to={PathConstants.ABOUT}
                >About</Link>
            </li>
            <li className={styles["menu__item"]} onClick={() => changeMenuOpen()}>
                <Link
                    className={`${styles["menu__link"]} link`} to={PathConstants.CONTACTS}

                >Contacts</Link>
            </li>
        </ul>

    )
};
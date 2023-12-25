import styles from "./Footer.module.scss";
import Logo from "../Logo/Logo";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles["footer__container"]}`}>
                <p className={styles["footer__copy"]}>&copy; Все права защищены</p>
                <Logo footer={true} />
            </div>
        </footer>
    )
}
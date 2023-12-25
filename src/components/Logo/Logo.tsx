import {Link} from "react-router-dom";
import logoImg from "../../images/logo.svg";
import LogoImgFooter from "../../images/logo-footer.svg"

import styles from "./Logo.module.scss";

export default function Logo({footer}: { footer: boolean }) {
    return (
        <Link to="/">
            <img src={footer ? LogoImgFooter : logoImg} alt="Logo" width={40} height={40} />
        </Link>
    )
}
import {Link} from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/">
            <img src="./logo.svg" alt="Logo" width={50} height={50} />
        </Link>
    )
}
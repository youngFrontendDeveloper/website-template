import Nav from "../Nav/Nav";

import "./Header.scss"
import Logo from "../Logo/Logo";


export default function Header() {
    return (
        <header className="header">
            <Logo />
            <Nav />

        </header>
    )
}
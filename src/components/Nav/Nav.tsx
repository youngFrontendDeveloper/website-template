import {Link} from "react-router-dom";
import PathConstants from "../../routes/pathConstants";

export default function Nav(){
    return(
        <>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><Link to={PathConstants.HOME}>Home</Link></li>
                    <li className="nav-item"><Link to={PathConstants.COUNTRIES}>Countries</Link></li>
                    <li className="nav-item"><Link to={PathConstants.ABOUT}>About</Link></li>

                </ul>
                {/*<NavLink to="/">*/}
                {/*    Home*/}
                {/*</NavLink>*/}
                {/*<NavLink to="countries">*/}
                {/*    Countries*/}
                {/*</NavLink>*/}
                {/*<NavLink to="countries/:id">*/}
                {/*    Country*/}
                {/*</NavLink>*/}
            </nav>
        </>
    )
}
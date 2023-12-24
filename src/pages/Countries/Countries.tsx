import {Link} from "react-router-dom";


export default function CountriesPage() {
    return (
        <>
           <p> Countries</p>

            <Link to="/countries/:id">Simple country</Link>
        </>
    )
}
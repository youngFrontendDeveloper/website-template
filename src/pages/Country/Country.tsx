import {Link, useParams} from "react-router-dom";

export default function CountryPage() {
    let {id} = useParams()

    return (
        <>
            <Link to="/countries">Back</Link>
            <p> Single movie</p>
        </>
    )
}
import {useParams} from "react-router-dom";


export default function HomePage() {
    let {id} = useParams()
    return (
        <>
            I am Home
        </>
    )
}

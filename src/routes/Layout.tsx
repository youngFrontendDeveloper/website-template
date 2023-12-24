import {Outlet} from "react-router-dom"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


export default function Layout() {
    return (
        <>
            <Header />
            <div className="content">
                <aside className="sidebar">
                    I am a aside
                </aside>
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    )
}
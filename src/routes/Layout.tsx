import {Suspense} from "react";
import {Outlet} from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Aside from "../components/Aside/Aside";

import styles from "./Layout.module.scss"


export default function Layout() {
    return (
        <>
            <Header />
            <div className={`container ${styles.content}`}>
                <Aside />
                <main className={styles.main}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
            <Footer />
        </>
    )
}
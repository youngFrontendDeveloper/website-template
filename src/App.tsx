import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Layout from "./routes/Layout";
import Home from './pages/Home/Home';
import CountriesPage from "./pages/Countries/Countries";
import CountryPage from "./pages/Country/Country";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AboutPage from "./pages/About/About";
import ContactsPage from "./pages/Contacts/Contacts";


function App() {

    const router = createBrowserRouter([
        {
            // parent route component
            element: <Layout />,
            errorElement: <ErrorPage />,
            // child route components
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/about",
                    element: <AboutPage />,
                },
                {
                    path: "/countries",
                    element: <CountriesPage />,
                },
                {
                    path: "/countries/:id",
                    element: <CountryPage />,
                },
                {
                    path: "/contacts",
                    element: <ContactsPage />,
                },

            ],
        },
    ])
    return (
        <RouterProvider router={router} />
    );
}

export default App;

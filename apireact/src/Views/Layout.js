import React from 'react'
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
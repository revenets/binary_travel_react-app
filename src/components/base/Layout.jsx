import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({isLoggedIn, handleLogIn}) => {
    return (
        <>
            <Header isLoggedIn={isLoggedIn} handleLogIn={handleLogIn}/>

            <Outlet />

            <Footer />
        </>
    );
}

export default Layout;

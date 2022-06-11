import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({isLoggedIn}) => {
    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>

            <Outlet />

            <Footer />
        </>
    );
}

export default Layout;

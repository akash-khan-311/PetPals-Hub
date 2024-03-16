import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavbarSimple } from '../shared/Navbar/Nav';
import Footer from '../shared/Footer/Footer';

const Root = () => {
    return (
        <div >
            <div className='mx-auto max-w-screen-xl px-5 md:px-2 lg:px-0'>
            <NavbarSimple/>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;
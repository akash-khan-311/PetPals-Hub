import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavbarSimple } from '../shared/Navbar/Nav';

const Root = () => {
    return (
        <div className='mx-auto max-w-screen-xl px-5 md:px-2 lg:px-0'>
            <NavbarSimple/>
            <Outlet/>
        </div>
    );
};

export default Root;
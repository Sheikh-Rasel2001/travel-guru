import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className=' bg-white'>
           <div className='w-11/12 mx-auto py-4'>
             <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
           </div>
        </div>
    );
};

export default AuthLayout;
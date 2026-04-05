import React from 'react';
import { Outlet } from 'react-router';
import bgImage from '../assets/Rectangle 1.png';
import Navbar from '../Component/Navbar';

const MainLayout = () => {
    return (
        <div className='w-full h-screen relative'>
            <img src={bgImage} alt='Background Image' className='absolute w-full h-full object-cover' />

            <div className='absolute inset-0 bg-black/50'></div>

            {/* main content */}
            <div className='relative z-10 h-full'>
                <header className='pt-6'>
                    <Navbar></Navbar>
                </header>
                {/* outlet */}
                <main>
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
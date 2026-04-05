import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='w-11/12 py-2 mx-auto flex flex-col lg:flex-row justify-between items-center px-4'>
            {/* logo */}
            <div>
                <img src={logo} alt="Travel Logo" className='w-32 h-16 filter brightness-0 invert' />
            </div>
            {/* search bar */}
            <div className='w-80 mont'>
                <label className="input bg-transparent border border-white/40 text-primary">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search Your Destination" className='mont bg-transparent outline-none placeholder:text-primary text-lg'/>
                </label>
            </div>
            {/* menu item */}
            <div className='text-primary flex justify-between items-center gap-6 mont text-lg'>
                <NavLink>News</NavLink>
                <NavLink>Destination</NavLink>
                <NavLink>Blog</NavLink>
                <NavLink>Contact</NavLink>
            </div>
            {/* login button */}
            <div>
                <button className='px-4 py-2 bg-secondary text-black font-semibold rounded-sm mont'>Login</button>
            </div>

        </div>
    );
};

export default Navbar;
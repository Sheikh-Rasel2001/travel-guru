import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink, useNavigate } from 'react-router';
import AuthContext from '../Authentication/AuthContext';
import { FaRegCircleUser } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const Navbar = ({ isDark }) => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                navigate('/', { replace: true });
                toast.success('You are signed out')
            })
            .catch(error => console.log(error));
    }

    return (
        <div className={`w-11/12 py-2 mx-auto flex flex-col lg:flex-row justify-between items-center px-4 ${isDark ? 'text-primary' : 'text-[#001931]'}`}>
            {/* logo */}
            <div>
                <Link to='/'>
                    <img src={logo} alt="Travel Logo" className={`w-32 h-16 filter ${isDark ? 'brightness-0 invert' : ''}`} />
                </Link>
            </div>
            {/* search bar */}
            <div>
                {
                    isDark ? <div className='w-80 mont'>
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
                            <input type="search" required placeholder="Search Your Destination" className='mont bg-transparent outline-none placeholder:text-primary text-lg' />
                        </label>
                    </div> : <div className='w-96'></div>
                }
            </div>
            {/* menu item */}
            <div className='flex justify-between items-center gap-6 mont text-lg'>
                <NavLink to='/'>News</NavLink>
                <NavLink to='/'>Destination</NavLink>
                <NavLink to='/'>Blog</NavLink>
                <NavLink to='/'>Contact</NavLink>
            </div>
            {/* login button */}
            <div className='relative'>
                <div onClick={() => setOpen(!open)} className='cursor-pointer'>
                    {
                        user ? <img src={user?.photoURL} alt="User" className='w-8 h-8 rounded-full' /> : <Link to='/auth/signIn'><FaRegCircleUser className='text-4xl' /></Link>
                    }
                </div>
                {/* drop down */}
                {
                    open && user && (
                        <div className='absolute right-0 mt-3 w-56 bg-white shadow-lg rounded-xl p-4 z-50'>
                            <div className='py-2 border-b border-b-gray-300 mb-2'>
                                <h3 className='text-sm mont text-[#001931] font-semibold'>{user?.displayName}</h3>
                                <p className='text-sm text-accent mont'>{user?.email}</p>
                            </div>

                            <button onClick={handleSignOut} className='px-4 py-2 bg-secondary text-black font-semibold rounded-sm mont cursor-pointer'>Log Out</button>

                        </div>
                    )
                }
                {/* {
                    user ? <button onClick={handleSignOut} className='px-4 py-2 bg-secondary text-black font-semibold rounded-sm mont cursor-pointer'>Log Out</button> : <Link to='/auth/signIn'>
                        <button className='px-4 py-2 bg-secondary text-black font-semibold rounded-sm mont cursor-pointer'>Login</button>
                    </Link>
                } */}
            </div>

        </div>
    );
};

export default Navbar;
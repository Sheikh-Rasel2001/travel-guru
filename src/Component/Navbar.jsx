import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink, useNavigate } from 'react-router';
import AuthContext from '../Authentication/AuthContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaRegCircleUser } from "react-icons/fa6";
import { toast } from 'react-toastify';

const Navbar = ({ isDark }) => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);  // desktop dropdown
    const [showMenu, setShowMenu] = useState(false); // mobile sidebar

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                navigate('/', { replace: true });
                toast.success('You are signed out');
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <div className={`w-11/12 mx-auto py-3 flex justify-between items-center ${isDark ? 'text-primary' : 'text-[#001931]'}`}>

                {/* LEFT: Logo + Mobile Button */}
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className={`w-24 lg:w-32 ${isDark ? 'brightness-0 invert' : ''}`}
                        />
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setShowMenu(true)}
                        className="lg:hidden text-2xl"
                    >
                        <FaBars />
                    </button>
                </div>

                {/* SEARCH (Desktop only) */}
                {
                    isDark && (
                        <div className="hidden lg:block lg:w-80">
                            <label className="input bg-transparent border border-white/40 text-primary">
                                <input
                                    type="search"
                                    placeholder="Search Your Destination"
                                    className="bg-transparent outline-none w-full"
                                />
                            </label>
                        </div>
                    )
                }

                {/* MENU (Desktop) */}
                <div className="hidden lg:flex gap-6 text-lg">
                    <NavLink to="/">News</NavLink>
                    <NavLink to="/">Destination</NavLink>
                    <NavLink to="/">Blog</NavLink>
                    <NavLink to="/">Contact</NavLink>
                </div>

                {/* USER (Desktop) */}
                <div className="hidden lg:block relative">
                    <div onClick={() => setOpen(!open)} className="cursor-pointer">
                        {
                            user ? (
                                <img
                                    src={user?.photoURL}
                                    alt="user"
                                    className="w-8 h-8 rounded-full"
                                />
                            ) : (
                                <Link to="/auth/signIn">
                                    <FaRegCircleUser  className="text-3xl" />
                                </Link>
                            )
                        }
                    </div>

                    {/* Dropdown */}
                    {
                        open && user && (
                            <div className="absolute right-0 mt-3 w-56 bg-white shadow-lg rounded-xl p-4 z-50 text-black">
                                <div className="border-b pb-2 mb-2">
                                    <h3 className="font-semibold">{user?.displayName}</h3>
                                    <p className="text-sm">{user?.email}</p>
                                </div>

                                <button
                                    onClick={handleSignOut}
                                    className="px-4 py-2 bg-secondary rounded"
                                >
                                    Log Out
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>

            {/* 🔥 MOBILE SIDEBAR */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 
                ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Close */}
                <div className="flex justify-end p-4">
                    <button onClick={() => setShowMenu(false)} className="text-2xl">
                        <FaTimes />
                    </button>
                </div>

                {/* Search (Mobile) */}
                {
                    isDark && (
                        <div className="px-4 mb-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full border px-3 py-2 rounded"
                            />
                        </div>
                    )
                }

                {/* Menu */}
                <div className="flex flex-col gap-4 px-6 text-lg">
                    <NavLink to="/" onClick={() => setShowMenu(false)}>News</NavLink>
                    <NavLink to="/" onClick={() => setShowMenu(false)}>Destination</NavLink>
                    <NavLink to="/" onClick={() => setShowMenu(false)}>Blog</NavLink>
                    <NavLink to="/" onClick={() => setShowMenu(false)}>Contact</NavLink>
                </div>

                {/* User */}
                <div className="mt-6 px-6">
                    {
                        user ? (
                            <>
                                <p className="font-semibold">{user?.displayName}</p>
                                <p className="text-sm">{user?.email}</p>

                                <button
                                    onClick={handleSignOut}
                                    className="mt-3 px-4 py-2 bg-secondary rounded"
                                >
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <Link to="/auth/signIn" onClick={() => setShowMenu(false)}>
                                <button className="px-4 py-2 bg-secondary rounded">
                                    Login
                                </button>
                            </Link>
                        )
                    }
                </div>
            </div>

            {/* 🔥 OVERLAY */}
            {
                showMenu && (
                    <div
                        onClick={() => setShowMenu(false)}
                        className="fixed inset-0 bg-black/40 z-40"
                    ></div>
                )
            }
        </>
    );
};

export default Navbar;
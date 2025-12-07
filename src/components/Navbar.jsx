import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/pm.png';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [isChecked, setIsChecked] = useState(false)
    const handleSignOut = () => {
        signOut(auth);
    };
    const handleTheme = () => {
        setIsChecked(prev => !prev);
    }
    useEffect(() => {
        const theme = isChecked ? "dark" : "light";
        document.documentElement.setAttribute('data-theme', theme);
    }, [isChecked])

    const activeClass = ({ isActive }) =>
        isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
            : "hover:text-blue-500 transition-colors";

    return (
        <div className="navbar bg-white shadow-md sticky top-0 z-50 px-6 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content mt-2 p-2 shadow bg-white rounded-box w-52"
                    >
                        <li><NavLink to="/" className={activeClass}>Home</NavLink></li>
                        <li><NavLink to="/services" className={activeClass}>Services</NavLink></li>
                        <li><NavLink to="/my-profile" className={activeClass}>My Profile</NavLink></li>
                        <li><NavLink to="/add-services" className={activeClass}>Add Services</NavLink></li>
                    </ul>
                </div>

                <NavLink to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="w-40" src={logo} alt="Logo" />
                </NavLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4 font-medium text-gray-700">
                    <li><NavLink to="/" className={activeClass}>Home</NavLink></li>
                    <li><NavLink to="/services" className={activeClass}>Pet & Supplies</NavLink></li>
                    {
                        user && (
                            <>
                                <li><NavLink to="/my-profile" className={activeClass}>My Profile</NavLink></li>
                                <li><NavLink to="/add-services" className={activeClass}>Add Listing</NavLink></li>
                                <li><NavLink to="/my-services" className={activeClass}>My Listing</NavLink></li>
                                <li><NavLink to="/my-orders" className={activeClass}>My Orders</NavLink></li>
                            </>
                        )
                    }
                </ul>
            </div>

            <div className="navbar-end flex items-center space-x-4">
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" onClick={handleTheme} value="synthwave" />

                    {/* sun icon */}
                    <svg
                        className="swap-off h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                        className="swap-on h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
                {user ? (
                    <>
                        <button onClick={handleSignOut} className="btn btn-outline btn-primary rounded-lg hover:bg-primary hover:text-white transition" >
                            Logout
                        </button>

                        <div className="relative group cursor-pointer">
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} alt="User" />
                                </div>
                            </div>

                            <div className="absolute -left-30 top-15 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap">
                                {user?.displayName}
                            </div>
                        </div>
                    </>
                ) : (
                    <NavLink to="/login" className="btn btn-primary rounded-lg hover:bg-blue-600 transition">
                        Login
                    </NavLink>
                )}
            </div>



        </div>
    );
};

export default Navbar;

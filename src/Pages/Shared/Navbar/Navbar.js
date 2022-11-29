import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../src/findUke.png'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li className='text-gray-500 hover:text-indigo-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'><Link to="/">Home</Link></li>
        <li className='text-gray-500 hover:text-indigo-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'><Link to="/blog">Blog</Link></li>
        <li className='text-gray-500 hover:text-indigo-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'><Link to="/contact">Contact</Link></li>
        {user?.uid ?
            <>
                <li className='text-gray-500 hover:text-indigo-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'><Link to="/dashboard">Dashboard</Link></li>
                <li className='text-gray-500 hover:text-indigo-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'><button onClick={handleLogOut}>Log out</button></li>
            </>
            : <li className='text-gray-500 hover:text-indigo-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'><Link to="/login">Login</Link></li>}
    </React.Fragment>
    return (
        // <div>
        //     <nav className="shadow">
        //         <div className="max-w-7xl mx-auto">
        //             <div className="flex items-center justify-between h-16">
        //                 <div className="w-full justify-between flex items-center">
        //                     <Link to="/" className="btn btn-ghost normal-case not-italic hover:italic font-black text-xl"><img src={logo} style={{ width: 30, height: 30 }} alt="" />   Find Uke</Link>
        //                     <div className="hidden md:block">
        //                         <div className="ml-10 flex items-baseline space-x-4">
        //                             <Link className="text-gray-500  hover:text-indigo-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/home">
        //                                 Home
        //                             </Link>
        //                             <Link className="text-gray-500  hover:text-indigo-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/blog">
        //                                 Blog
        //                             </Link>
        //                             <Link className="text-gray-500  hover:text-indigo-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/contact">
        //                                 Contact
        //                             </Link>
        //                             {
        //                                 user?.email ?
        //                                     <>
        //                                         <Link className="text-gray-500  hover:text-indigo-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/dashboard">
        //                                             My Orders
        //                                         </Link>

        //                                         <button onClick={handleLogOut} className='btn-ghost'>Log Out</button>
        //                                     </>
        //                                     :
        //                                     <Link className="text-gray-500  hover:text-indigo-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/login">
        //                                         Login
        //                                     </Link>
        //                             }
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div className="-mr-2 flex md:hidden">
        //                     <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
        //                         <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        //                             <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
        //                             </path>
        //                         </svg>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="md:hidden">
        //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        //                 <Link className="text-gray-500 hover:text-indigo-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/home">
        //                     Home
        //                 </Link>

        //                 <Link className="text-gray-500 hover:text-indigo-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/blog">
        //                     Blog
        //                 </Link>
        //                 <Link className="text-gray-500 hover:text-indigo-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/contact">
        //                     Contact
        //                 </Link>
        //                 {
        //                     user?.email ?
        //                         <>
        //                             <Link className="text-gray-500  hover:text-indigo-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/dashboard">
        //                                 My Orders
        //                             </Link>

        //                             <button onClick={handleLogOut} className='btn-ghost'>Log Out</button>
        //                         </>
        //                         :
        //                         <Link className="text-gray-500  hover:text-indigo-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/login">
        //                             Login
        //                         </Link>
        //                 }
        //             </div>
        //         </div>
        //         {/* <div className="-mr-2 flex md:hidden">
        //             <button htmlFor="dashboard-drawer" className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
        //                 <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        //                     <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
        //                     </path>
        //                 </svg>
        //             </button>
        //         </div> */}
        //     </nav>
        // </div>


        <div className="navbar bg-base-100 flex justify-between shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case not-italic hover:italic font-black text-xl"><img src={logo} style={{ width: 30, height: 30 }} alt="" />   Find Uke</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>

    );
};

export default Navbar;
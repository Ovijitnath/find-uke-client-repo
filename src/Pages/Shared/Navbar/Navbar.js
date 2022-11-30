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
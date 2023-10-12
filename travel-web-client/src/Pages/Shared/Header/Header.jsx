import { useContext, useEffect } from 'react';
import logo from '../../../assets/Logo/travenger.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProviders';
import { FaUserCircle } from 'react-icons/fa';
import '../../../Components/CommonCss/Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();

    // route title settings
    useEffect(() => {
        const routeName = location.pathname.replace('/', '');
        const formattedRouteName = routeName.charAt(0).toUpperCase() + routeName.slice(1);
        document.title = `Travengers > ${formattedRouteName}`;
    }, [location]);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const navOptions=<>
        <li><Link >Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/destinations'>Destination</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to=''>Contact</Link></li>
        {/* {
            user && <li><p>{user.displayName}</p></li>
        } */}
        <li className='hidden md:block'>
            <input type="text" placeholder="Search your destination..." 
            className="border placeholder:text-black border-gray-500 bg-opacity-30 w-full max-w-xs mb-4 md:mb-0" />
        </li>
        {
            user 
            ? <li className='nav-btn ml-2'><button onClick={handleLogout} className=''>Logout</button></li> 
            : <li className='nav-btn ml-2'><Link to='/login' >Login</Link></li>
        }
        
    </>

    return (
        <div className=" w-full z-10 bg-opacity-30  bg-gray-200 text-textColor">
            <div className="menubar container mx-auto">
                <div className="menubar-start flex justify-between">
                    <a className=""><img className="w-[70px] h-[70px]" src={logo} alt="" /></a>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    {
                        user ? 
                        <div className='tooltip tooltip-bottom tooltip-warning ' data-tip={user.email}>
                            {
                                user?.photoURL ? <img className='border-1 border-red-400 rounded-full w-10' src={user.photoURL} alt="" />:
                                <FaUserCircle className="w-[20px]"></FaUserCircle>
                            }
                            
                        </div> : 
                        <div className='menu rounded-lg'>
                            <li className="nav-btn"><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/register">Sign up</NavLink></li>
                        </div>    
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
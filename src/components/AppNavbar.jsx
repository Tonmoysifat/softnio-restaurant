import hamburger from "/images/hamburger.svg"
import {Link, NavLink} from "react-router-dom";
const AppNavbar = () => {
    return (
        <div className="navbar text-white py-5 px-0 max-w-[1189px]">
            <div className="navbar-start w-full lg:w-[210px] flex !justify-between">
                <div className="flex lg:pb-1">
                    <img src="/images/logo.svg" alt="logo"/>
                    <a className="btn btn-ghost text-2xl pl-[0.3rem]">Restaurant</a>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <img src={hamburger} alt="hamburger"/>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm bg-black dropdown-content right-0 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/portflio">Portfolio</NavLink></li>
                        <li><NavLink to="/client">Clients</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/portflio">Portfolio</NavLink></li>
                    <li><NavLink to="/client">Clients</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <Link className="uppercase btn bg-[#FEBF00] border-0 rounded-none font-bold px-6 hover:bg-[#FEBF00]">Book A Table</Link>
            </div>
        </div>
    )
}
export default AppNavbar

import hamburger from "/images/hamburger.svg"
import {Link, NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

const AppNavbar = () => {
    const [display, setDisplay] = useState(true)
    useEffect(() => {
        const element = document.querySelector('.navbar');

        function handleScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 3) {
                element?.classList.add('shadow-lg');
            } else {
                element?.classList.remove('shadow-lg');
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (
        <div
            className="navbar justify-center w-full bg-image bg-color fixed top-0 px-6 lg:px-20 text-white py-5 z-[999]">
            <div className="w-[1200px]">
                <div className="navbar-start w-full lg:w-[210px] flex !justify-between">
                    <div className="flex lg:pb-1">
                        <img src="/images/logo.svg" alt="logo"/>
                        <a className="btn btn-ghost text-2xl pl-[0.3rem]">Restaurant</a>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" onClick={() => setDisplay((prev) => !prev)}
                             className="btn btn-ghost lg:hidden">
                            <img src={hamburger} alt="hamburger"/>
                        </div>
                        <ul
                            tabIndex={0}
                            className={`${display && "hidden"} menu menu-sm bg-black dropdown-content right-0 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/portflio">Portfolio</NavLink></li>
                            <li><NavLink to="/client">Clients</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex mlforsmlap">
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
                    <Link
                        className="uppercase btn bg-[#FEBF00] border-0 rounded-none font-bold px-6 hover:bg-[#FEBF00]">Book
                        A Table</Link>
                </div>
            </div>
        </div>
    )
}
export default AppNavbar

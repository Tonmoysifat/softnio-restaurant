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
            className="appNavbar">
            <div className="w-[1200px]">
                <div className="navbar-logo">
                    <div className="flex lg:pb-1">
                        <img src="/images/logo.svg" alt="logo"/>
                        <a className="logo-text">Restaurant</a>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" onClick={() => setDisplay((prev) => !prev)}
                             className="btn btn-ghost lg:hidden">
                            <img src={hamburger} alt="hamburger"/>
                        </div>
                        <ul
                            tabIndex={0}
                            className={`${display && "hidden"} mobile-menu !bg-black menu`}>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/portflio">Portfolio</NavLink></li>
                            <li><NavLink to="/client">Clients</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="desktop-menu">
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
                        className="app-btn">Book
                        A Table</Link>
                </div>
            </div>
        </div>
    )
}
export default AppNavbar

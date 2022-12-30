import React from 'react';
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <NavLink to="/">
                        Aman Manwani
                    </NavLink>
                </div>
                <input type="checkbox" id="click" />
                <label className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>
                <ul>
                    <li><NavLink  to="/">Home</NavLink></li>
                    <li><NavLink to="/about"> About</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
            </nav>
        </>
    )
};

export default Navbar;
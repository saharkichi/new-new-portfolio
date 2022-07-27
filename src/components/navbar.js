import React from 'react';
import "./components.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Homepage">About Me &nbsp; &nbsp; </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Portfolio">Portfolio &nbsp; &nbsp; </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Contact">Contact Me &nbsp; &nbsp; </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Resume">Resume &nbsp; &nbsp; </NavLink>
        </div>
    )
}

export default Navbar

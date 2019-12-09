import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar bg-success navbar-expand-sm rounded-sm navbar-dark px-sm-5">
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/">
                        <i className="fas fa-chevron-left navbar-brand text-white" />
                    </Link>
                </li>
                <li className="nav-item ml-5">
                    <Link to="/settings">
                        <i className="fas fa-cog navbar-brand mr-auto"></i>
                    </Link>
                </li>

            </ul>
            
        </nav>
    )
}

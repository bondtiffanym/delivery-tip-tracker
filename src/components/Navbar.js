import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar bg-success d-lg-flex justify-content-between w-100 navbar-expand-sm rounded-sm navbar-dark px-sm-5">

            <ul className="navbar-nav d-lg-flex w-100 justify-content-between">
                <li className="nav-item ml-3">
                    <Link to="/">
                        <i className="fas fa-home navbar-brand text-white" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/settings">
                        <i className="fas fa-cog navbar-brand mr-auto"></i>
                    </Link>
                </li>

            </ul>
            
        </nav>
    )
}

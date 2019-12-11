import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar bg-light d-lg-flex justify-content-between w-100 navbar-expand-sm rounded-sm navbar-light rounded px-sm-5">

            <ul className="navbar-nav d-lg-flex w-100 justify-content-between">
                <li className="nav-item ml-3">
                    <Link to="/" className="nav-link text-success">
                        Home <i className="fas fa-home ml-2 navbar-brand text-success" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/settings" className="text-success nav-link">
                        Settings <i className="fas fa-cog ml-2 navbar-brand mr-auto text-success"></i>
                    </Link>
                </li>

            </ul>
            
        </nav>
    )
}

import React, { Fragment } from "react";
import { Link} from 'react-router-dom'


let Navbar = () => {

    let handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('userCred');
        window.location.reload();
    }

    return (
        <Fragment>
            <nav className="navbar navbar-expand-md p-3 border-bottom  bg-light shadow-sm">
                <div className="container-fluid">
                    <Link to={'/home'} className="fw-bold ml-2 text-dark text-decoration-none logo_size">RGUKT</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/home'} className="nav-link text-dark fw-bold m ml-2">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/my-tests'} className="nav-link text-dark fw-bold ml-1">Tests</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/contact-us'} className="nav-link text-dark fw-bold ml-1">Contact-us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/profile'} className="nav-link text-dark fw-bold ml-1">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/'} onClick={handleLogout} className="text-decoration-none"><a className="nav-link text-dark">Logout</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </Fragment>
    )
};

export default Navbar;
import React, { Fragment } from "react";
import {Link} from 'react-router-dom'

 let Navbar = () =>{
     return(
        <Fragment>
            <nav className="navbar navbar-expand-sm  bg-light shadow-lg">
                <div className="container-fluid">
                    <Link to={'/home'} className="navbar-brand ml-4 text-dark fw-bold">RGUKT</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav marg">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link text-dark fw-bold m ml-2">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
     )
 };
 
 export default Navbar;
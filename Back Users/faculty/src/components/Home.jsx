import React,{ Fragment } from "react";
import img1 from '../assets/user.jpg'

import {Link}  from 'react-router-dom';
import Evaluation from "./Evaluation";
import './Home.css';

let Home = () =>{
    return(
        <Fragment>
            <div className="container-fluid mt-5 text-center fullscreen">
                <img src={img1} alt="" width={500}/>
                <h1 className="mt-1">Hello Mr. Chiranjeevi</h1>
                <button className="btn btn-lg btn-secondary m-3"><Link to={'/evaluation'} className="text-decoration-none text-white p-2">Evaluation</Link>
                <span class="badge badge-pill badge-primary bg-success">active</span></button>
                <button className="btn btn-lg btn-secondary disabled px-4"><a href="" className="text-decoration-none text-white p-2">Invigilation</a>
                <span class="badge badge-pill badge-primary bg-dark">inactive</span></button>
            </div>
        </Fragment>
    )
};

export default Home;
import React, { Fragment } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import img1 from '../assets/jeevan.jpeg';




let Profile = () =>{
    return(
        <Fragment>
            <Navbar/>

                <div className="container mt-4">
                   <div className="card align-items-center mb-5">
                        <img src={img1} width={220} className="img-thumbnail mt-3 mb-3"/>
                        <div className="container">
                        <h5 className="text-center">Student Information</h5>
                        <table className="table table-striped table-bordered">
                            <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>S. Jeevan Babu</td>
                            </tr>
                            <tr>
                                <td>ID NO:</td>
                                <td>N160102</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>n160102@rguktn.ac.in</td>
                            </tr>
                            <tr>
                                <td>Year:</td>
                                <td>E4</td>
                            </tr>
                            <tr>
                                <td>Branch:</td>
                                <td>CSE</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                   </div>
                </div>

            <Footer/>
        </Fragment>
    )
};

export default Profile;
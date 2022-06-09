import { faAddressBook, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import Navbar from "./Navbar";

let Evaluation = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="container-fluid bg-light p-5">
                <div className="container">
                    <div className="container-fluid colorr p-4">
                        <h2>My Tests</h2>
                    </div>
                    <div className="card p-3 shadow-lg">
                        <form className="mt-3">
                            <div className="row p-3">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div class="input-group mb-2">
                                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Enter keyword" />
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">Search</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="container">
                            <div className="card shadow-lg mt-3 mb-4">
                                <div className="card-body">
                                    <span className="badge badge-secondary bg-secondary mb-2">inactive</span>
                                    <h5>RGUKT NUZVID DATABASE MANAGEMENT SYSTEMS for CSE (10/11/2021)</h5>
                                    <button className="btn btn-primary"><FontAwesomeIcon icon={faBook} /> Details</button>
                                </div>
                            </div>
                            <div className="card shadow-lg mt-3 mb-4">
                                <div className="card-body">
                                    <span className="badge badge-secondary bg-secondary mb-2">inactive</span>
                                    <h5>RGUKT NUZVID Formal Languages and Automata Theory for CSE (15/11/2021)</h5>
                                    <button className="btn btn-primary"><FontAwesomeIcon icon={faBook} /> Details</button>
                                </div>
                            </div>
                            <div className="card shadow-lg mt-3 mb-4">
                                <div className="card-body">
                                    <span className="badge badge-secondary bg-secondary mb-2">inactive</span>
                                    <h5>RGUKT NUZVID WEB TECHNOLOGIES for CSE (19/11/2021)</h5>
                                    <button className="btn btn-primary"><FontAwesomeIcon icon={faBook} /> Details</button>
                                </div>
                            </div>
                            <div className="card shadow-lg mt-3 mb-4">
                                <div className="card-body">
                                    <span className="badge badge-secondary bg-secondary mb-2">inactive</span>
                                    <h5>RGUKT NUZVID COMPUTER ORGANIZATION AND ARCHITECTURE for CSE (08/11/2021)</h5>
                                    <button className="btn btn-primary"><FontAwesomeIcon icon={faBook} /> Details</button>
                                </div>
                            </div>
                            <div className="card shadow-lg mt-3 mb-4">
                                <div className="card-body">
                                    <span className="badge badge-secondary bg-secondary mb-2">inactive</span>
                                    <h5>RGUKT NUZVID Mathematics-2(Probability and Statistics) for CSE (18/10/2021)</h5>
                                    <button className="btn btn-primary"><FontAwesomeIcon icon={faBook} /> Details</button>
                                </div>
                            </div>
                            <div className="card shadow-lg mt-3 mb-4">
                                <div className="card-body">
                                    <span className="badge badge-secondary bg-secondary mb-2">inactive</span>
                                    <h5>RGUKT NUZVID Cyber Security for CSE (27/10/2021)</h5>
                                    <button className="btn btn-primary"><FontAwesomeIcon icon={faBook} /> Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Evaluation;
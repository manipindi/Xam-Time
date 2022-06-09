import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import React, { Fragment } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

let Tests = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3>Tests</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="container mt-4">
                <div className="row">
                    {/* <div className="col-4">
                        <div className="list-group " id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">All</a>
                            <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">CSE</a>
                            <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">ECE</a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">MECHANICAL</a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">CHEMICAL</a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">CIVIL</a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">MME</a>
                        </div>
                    </div> */}
                    <div className="col h-100">
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <div className="card shadow-sm">
                                    <div className="card-header-pills">

                                    </div>
                                    <div className="card-body">
                                        <span className="badge badge-secondary bg-secondary mb-2">inactive</span>
                                        <h5>RGUKT NUZVID DATABASE MANAGEMENT SYSTEMS for CSE (10/11/2021)</h5>
                                        <button className="btn btn-success"><a href=""><i className="fa fa-telegram-circle"></i></a> Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-sm">
                                    <div className="card-header-pills">

                                    </div>
                                    <div className="card-body">
                                        <span className="badge badge-secondary bg-secondary mb-2">inactive</span>
                                        <h5>RGUKT NUZVID Formal Languages and Automata Theory for CSE (15/11/2021)</h5>
                                        <button className="btn btn-success">Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-sm">
                                    <div className="card-header-pills">
                                        
                                    </div>
                                    <div className="card-body">
                                    <span className="badge badge-secondary bg-secondary mb-2">inactive</span>
                                    <h5>RGUKT NUZVID OPERATIONS RESEARCH for CSE (17/11/2021)</h5>
                                    <button className="btn btn-success">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <div className="card shadow-sm">
                                    <div className="card-header-pills">
                                        
                                    </div>
                                    <div className="card-body">
                                    <span className="badge badge-secondary bg-secondary mb-2">inactive</span>
                                    <h5>RGUKT NUZVID WEB TECHNOLOGIES for CSE (19/11/2021)</h5>
                                    <button className="btn btn-success">Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-sm">
                                    <div className="card-header-pills">
                                        
                                    </div>
                                    <div className="card-body">
                                    <span className="badge badge-secondary bg-secondary mb-2">inactive</span>
                                    <h5>RGUKT NUZVID COMPUTER ORGANIZATION AND ARCHITECTURE for CSE (08/11/2021)</h5>
                                    <button className="btn btn-success">Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-sm">
                                    <div className="card-header-pills">
                                        
                                    </div>
                                    <div className="card-body">
                                    <span className="badge badge-secondary bg-secondary mb-2">inactive</span>
                                    <h5>RGUKT NUZVID Mathematics-2(Probability and Statistics) for CSE (18/10/2021)</h5>
                                    <button className="btn btn-success">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <div className="card shadow-sm">
                                    <div className="card-header-pills">
                                        
                                    </div>
                                    <div className="card-body">
                                    <span className="badge badge-secondary bg-secondary mb-2">inactive</span>
                                    <h5>RGUKT NUZVID Cyber Security for CSE (27/10/2021)</h5>
                                    <button className="btn btn-success">Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-sm">
                                    <div className="card-header-pills">
                                       
                                    </div>
                                    <div className="card-body">
                                    <span className="badge badge-secondary bg-secondary mb-2">inactive</span>
                                    <h5>RGUKT NUZVID Data Mining for CSE (25/10/2021)</h5>
                                    <button className="btn btn-success">Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow-sm">
                                    <div className="card-header-pills">
                                       
                                    </div>
                                    <div className="card-body">
                                    <span className="badge badge-secondary bg-secondary mb-2">inactive</span>
                                    <h5>RGUKT NUZVID Digital Image Processing for CSE (22/10/2021)</h5>
                                    <button className="btn btn-success">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
};

export default Tests;
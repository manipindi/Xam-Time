import React, { Fragment } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

let ContactPage = () => {
    return (
        <Fragment>
            <Navbar />

            <div className="container mt-4 mb-5">

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body p-4 bg-col  fw-bold">
                                <h3 className="fw-bold">Contact Us</h3>
                                <h6>Reach us through the form</h6>
                                <form>
                                    <div className="form-group">
                                        <label className="mt-3 fw-bold">Email</label>
                                        <input type="email" className="form-control mt-1" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mt-3 fw-bold">Message</label>
                                        <textarea class="form-control mt-2" rows="5" id="comment"></textarea>
                                    </div>
                                    <input type="submit" className="form-control mt-4 colorr fw-bold" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </Fragment>
    )
};

export default ContactPage;
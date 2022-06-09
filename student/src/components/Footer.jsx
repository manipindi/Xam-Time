import React, { Fragment } from "react";

let Footer = () =>{
    return(
        <Fragment>
            <div className="page-contain"></div>
            <footer className="page-footer bg-back text-white p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold colorr">RGUKT</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laborum, a consequatur assumenda soluta numquam vitae in sit magni? Ullam!</p>
                        </div>
                        <div className="col-md-3 col-lg-3  col-xl-3 mx-auto mt-3">
                                <h5 className="colorr  mb-3">Useful Links</h5>
                            <p>
                                <a href="#" className="link-light text-decoration-none">RGUKT AP</a>
                            </p>
                            <p>
                                <a href="#" className="link-light text-decoration-none">RGUKT NUZVID</a>
                            </p>
                            <p>
                                <a href="#" className="link-light text-decoration-none">Exam Cell</a>
                            </p>
                            <p>
                                <a href="#" className="link-light text-decoration-none">SMS</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h5 className="colorr  mb-3">Address</h5>
                            <p>Rajiv Gandhi University of Knowledge Technologies-Nuzvid Campus, Mylavaram Road, Nuzvid Krishna District, Andhra Pradesh - 521202</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
};

export default Footer;
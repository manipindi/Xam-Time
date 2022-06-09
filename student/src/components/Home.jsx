import React, { Fragment, useState, useEffect } from "react";
import { Link } from 'react-router-dom';


import img1 from '../assets/edit.png';
import image1 from '../assets/image.png';
import img2 from '../assets/Exam.jpg';
import Footer from "./Footer";
import Navbar from "./Navbar";


let Home = () => {

    const [state, setstate] = useState({
        currentTime: new Date().toLocaleTimeString()
    });

    const [user, setUser] = useState('0');

    // let userdata = localStorage.getItem('userCred');
    // console.log(userdata);

    // const userData = () => {
    //     let userdata = JSON.parse(localStorage.getItem('userCred'));
    //     console.log(userdata);
    //     setUser(userdata);
    //     console.log(user);
    // } 
    // useEffect(() => {
    //     let userdata = JSON.parse(localStorage.getItem('userCred'));
    //     console.log(userdata);
    //     setUser('1');
    //     console.log(user);
    // }, []);

    useEffect(() => {
        setInterval(() => {
            setstate(() => ({
                currentTime: new Date().toLocaleTimeString()
            }));
        }, 100);
    }, []);

    


    return (
        <Fragment>
            <Navbar />
            <section>
                <div className="row">
                    <div className="col-md-7">
                        <img src={img1} alt="" className='img-fluid flui' width={500} />
                    </div>
                    <div className="col-md-3 mt-5">
                        <div className="row">
                            <div className="col">
                                <div className="card shadow-sm">
                                    <div className="card-body text-center bg-1">
                                        <h2 className='color-1'>{state.currentTime}</h2>
                                    </div>
                                </div>
                                <div className="card shadow-lg mt-3">
                                    <div className="card-body">
                                        <img src={image1} alt="" className='img-fluid mx-auto d-block' width={150} />
                                        <div className='text-center'>
                                            <h3>Jeevan</h3>
                                            <h6>N160102</h6>
                                            <h6>Cse</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='pad container-fluid mt-4'>
                {/* <h3 className='text-dark'>Test Links:</h3> */}
                <div className="row">
                    <div className="col-md-3 ml-2">

                        {/* <div className="card">
                            <div className="card-body">
                                <Link to={'/terms-conditions'}><img src={img2} alt="" className='img-thumbnail' /></Link>
                            </div>
                        </div> */}
                        <div className="card shadow-lg"><span className="sps"></span>
                            <div className="card-body">
                            <span className="badge bg-success mb-2">Active</span>
                                <h4>Computer Networks</h4>
                                <p>Duration : 2.00 Hrs</p>
                                <Link to={'/terms-conditions'}><button className="btn btn-secondary px-4 btn-sm ml-auto p-2"> Start <i className="fa fa-external-link"></i></button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 ml-2">

                        {/* <div className="card">
                            <div className="card-body">
                                <Link to={'/terms-conditions'}><img src={img2} alt="" className='img-thumbnail' /></Link>
                            </div>
                        </div> */}
                        <div className="card shadow-lg"><span className="sps"></span>
                            <div className="card-body">
                            <span className="badge bg-secondary mb-2">Inactive</span>
                                <h4>Software Engineering</h4>
                                <p>Duration : 2.00 Hrs</p>
                                <button className="btn btn-secondary px-4 btn-sm ml-auto p-2"> Start <i className="fa fa-external-link"></i></button>
                                {/* <button className="btn btn-secondary px-4 btn-sm ml-auto p-2"> Start <i className="fa fa-external-link"></i></button> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 ml-2">

                        {/* <div className="card">
                            <div className="card-body">
                                <Link to={'/terms-conditions'}><img src={img2} alt="" className='img-thumbnail' /></Link>
                            </div>
                        </div> */}
                        <div className="card shadow-lg"><span className="sps"></span>
                            <div className="card-body">
                            <span className="badge bg-secondary mb-2">Inactive</span>
                                <h4>Operating Systems</h4>
                                <p>Duration : 2.00 Hrs</p>
                                <button className="btn btn-secondary px-4 btn-sm ml-auto p-2">Start <i className="fa fa-external-link"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </Fragment>
    )
};

export default Home;
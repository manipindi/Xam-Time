import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import imag1 from '../assets/log1.png';

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from '../firebase';





let SignUp = () => {

    const[userCredential, setMessage] = useState(false)

    const [email, setEmail] = useState({
        email : ""
    });
    const [password, setPassword] = useState({
        password : ""
    });

    let handleLogin = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setMessage(true);
                // ...
            })
            .catch((error) => {
                console.log(error);
                // ..
            });
    }


    return (
        <Fragment>
            <div className="container mar-top">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="card shadow-lg mt-5">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={imag1} alt="" width={500} />
                                    </div>
                                    <div className="col-md-6">
                                        <form className="form-log" onSubmit={handleLogin}>
                                            <div className="posi">
                                                <div className="form-group mar-t mb-3">
                                                    <input type="email" placeholder="Enter your Email" onChange={e=>setEmail(e.target.value)} className="form-control" required />
                                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                                </div>
                                                <div className="form-group mb-4">
                                                    <input type="password" placeholder="Enter Password" onChange={e=>setPassword(e.target.value)} className="form-control" required />
                                                </div>
                                                {/* <div className="form-group mb-4">
                                                    <input id="passId" type="password" placeholder="Confirm Password" className="form-control" required/>
                                                </div> */}
                                                <div className="form-group">
                                                    <button type="submit" class="btn btn-secondary">Sign Up</button>
                                                    <span className="ml-2">Already have an account? <Link to='/login' className="text-success">Login</Link></span>
                                                    {userCredential && <span className="text-success">Successfully created an account!</span>}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>

        </Fragment>
    )
}

export default SignUp;
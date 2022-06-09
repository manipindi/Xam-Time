import React, { Fragment,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

import imag1 from '../assets/log1.png';


let Login = () => {

    const [error, setError] = useState(false);
    
    const [email, setEmail] = useState({
        email : ""
    });
    const [password, setPassword] = useState({
        password : ""
    });




    const navigate = useNavigate()

    let handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user);
                localStorage.setItem('userCred',JSON.stringify(user.email))
                // console.log(user);
                navigate('/home')
                // ...
            })
            .catch((error) => {
                setError(true);
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
                                                    <input type="email" placeholder="Enter your Email" onChange={e=>setEmail(e.target.value)}  className="form-control"/>
                                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                                </div>
                                                <div className="form-group mb-4">
                                                    <input id="passId" type="password" onChange={e=>setPassword(e.target.value)} placeholder="Enter your password" className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" class="btn btn-secondary">Login</button>
                                                    <span className="ml-2">Need to create and Account? <Link to='/sign-up' className="text-success">Sign Up</Link></span>
                                                </div>
                                            </div>
                                            <div>{error && <div className="text-danger">Wrong email or password</div>}</div>
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
};


export default Login;
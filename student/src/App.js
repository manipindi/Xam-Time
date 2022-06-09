import React, { Fragment } from 'react';
import './App.css';

import SignUp from './Auth/SignUp';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/Home';
import Tests from './components/Tests';
import ContactPage from './components/ContactPage';
import Profile from './components/Profile';
import Login from './Auth/Login';
import Test from './test-creation/components/Test';
import Agreement from './agreements/Agreement';

function App() {

  const currentUser = false

  const RequireAuth = ({children}) =>{
    let token = localStorage.getItem('userCred');
    // console.log(token);
    return token ? (children) : <Navigate to='/'/>
  }

  return (
    <Fragment>
        <Routes>
            <Route path={'/'} element={<Login/>} ></Route>
            <Route path={'/sign-up'} element={<SignUp/>}></Route>
            <Route path={'/home'} element={<RequireAuth><Home/></RequireAuth>} ></Route>
            <Route path={'/my-tests'} element={<RequireAuth><Tests/></RequireAuth>} ></Route>
            <Route path={'/contact-us'} element={<RequireAuth><ContactPage/></RequireAuth>} ></Route>
            <Route path={'/profile'} element={<RequireAuth><Profile/></RequireAuth>} ></Route>
            <Route path={'/login'} element={<RequireAuth><Login/></RequireAuth>} ></Route>
            <Route path={'/terms-conditions'} element={<RequireAuth><Agreement/></RequireAuth>} ></Route>
            <Route path={'/test'} element={<RequireAuth><Test/></RequireAuth>} ></Route>
        </Routes>
    </Fragment>
  );
}

export default App;

import React, { Fragment } from 'react';
import './App.css';
import Home from './components/Home';

import { Routes, Route } from 'react-router-dom';
import Evaluation from './components/Evaluation';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path={'/'} element={<Home />} ></Route>
        <Route exact path={'/evaluation'} element={<Evaluation/>} ></Route>
      </Routes>
    </Fragment>
  );
}

export default App;

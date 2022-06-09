import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import './fontawesome.min.css';
import {Button, Row, Col} from 'react-bootstrap';
import AdminNavbar from './maincomponents/AdminNavbar';
import AdminFooter from './maincomponents/AdminFooter';
import Dashboard from './maincomponents/Dashboard';
import Tests from './maincomponents/Tests';
import People from './maincomponents/People';
import NotFound from './maincomponents/NotFound';
import Questions from './maincomponents/Questions';
import Login from './maincomponents/Login';
import Response from './maincomponents/Response';
import { BrowserRouter as Router , Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(state.authReducer.logStatus);

  if(!state.authReducer.logStatus){
    return(
      <Router>
      <div className="App">
        <AdminNavbar logStatus={state.authReducer.logStatus}/>

        <div className='content'>
          <Routes>
            <Route 
              path="/"
              element={<Login/>}
            />
            <Route 
              path="*"
              element={
                <Navigate to="/" />
              }
            />
          </Routes>
        </div>
        <AdminFooter />
      </div>
    </Router>
    )
  }

  return (
    <Router>
      <div className="App">
        <AdminNavbar logStatus={state.authReducer.logStatus}/>
        
        <div className='content'>
          <Routes>
            <Route path="/" >
              <Route index path="/" element={<Dashboard />} />
              <Route
                path="/people"
                element={<People/>}
              />
              <Route
                path="/tests"
                element={<Tests/>}
              />
              <Route
                path="/test"
                element={<Questions/>}
              />
              <Route 
                path="/login"
                element={<Login/>}
              />
              <Route 
                path="/response"
                element={<Response/>}
              />
              <Route 
                path="*"
                element={<NotFound/>}
                />
            </Route>
          </Routes>
        </div>
        <AdminFooter />
      </div>
    </Router>
  );
}

export default App;

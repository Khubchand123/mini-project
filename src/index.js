
import React,{useEffect} from 'react';
import app from './firebase';
import { getAuth,onAuthStateChanged} from "firebase/auth";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Auth/Login';
import Register from './Auth/Register';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
           <Routes>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/register' element={< Register />}></Route>
          </Routes>

    </Router>

  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

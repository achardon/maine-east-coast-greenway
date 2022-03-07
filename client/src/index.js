import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App';
import NavHeader from './components/NavHeader';
import About from './components/About';
import Explore from './components/Explore';
import MyTrips from './components/MyTrips';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/my_trips" element={<MyTrips />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

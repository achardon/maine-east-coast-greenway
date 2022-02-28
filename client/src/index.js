import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
        
      </Routes>
    </BrowserRouter>


  </React.StrictMode>,
  document.getElementById('root')
);

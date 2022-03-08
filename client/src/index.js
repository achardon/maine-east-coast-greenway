import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <NavHeader /> */}
      {/* Move the below to App */}
      {/* <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/my_trips" element={<MyTrips />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

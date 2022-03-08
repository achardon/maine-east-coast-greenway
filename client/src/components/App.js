import { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import NavHeader from "./NavHeader";
import Home from "./Home";
import About from "./About";
import Explore from "./Explore";
import MyTrips from "./MyTrips";
import Login from "./Login";
import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  const [count, setCount] = useState(0);
  
  useEffect(() => {
    fetch ("/hello")
    .then(r => r.json())
    .then(data => setCount(data.count))
  }, [])

  return (
    <div>
        <NavHeader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/my_trips" element={<MyTrips />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>

    </div>
  );
}

export default App;

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
  const [user, setUser] = useState(null);
  const [places, setPlaces] = useState([]);
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    //get array of all places
    fetch("/places")
    .then(r => r.json())
    .then(data => setPlaces(data))
    //get array of all accommodations
    fetch("/accommodations")
    .then((r) => r.json())
    .then((data) => setAccommodations(data));

  }, []);

  useEffect(() => {
    fetch ("/hello")
    .then(r => r.json())
    .then(data => setCount(data.count))
  }, [])

  return (
    <div>
        <NavHeader user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/explore" element={<Explore places={places} accommodations={accommodations}/>}></Route>
          <Route path="/my_trips" element={<MyTrips user={user}/>}></Route>
          <Route path="/log_in" element={<Login user={user} setUser={setUser}/>}></Route>
          <Route path="/sign_up" element={<Signup setUser={setUser} />}></Route>
        </Routes>

    </div>
  );
}

export default App;

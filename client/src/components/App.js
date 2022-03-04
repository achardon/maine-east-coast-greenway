// import './App.css';
import { useState, useEffect} from "react";
import About from "./About";

function App() {

  const [count, setCount] = useState(0);
  
  useEffect(() => {
    fetch ("/hello")
    .then(r => r.json())
    .then(data => setCount(data.count))
  }, [])

  return (
      <div>
        <div className="jumbotron text-center" style={{ padding: '40px' }}>
            <h1>East Coast Greenway</h1>
            <h2 style={{ padding: '10px' }}>MAINE </h2>
            <img src='https://www.greenway.org/uploads/attachments/cjyrp94jb215v00qiah4vmdr9-me.0.0.1522.1522.full.png' alt="maine map" style={{ padding: '40px' }} />
            <h4>An app developed by Alessandra Chardon</h4>
            {/* <h3>Purpose: CLAP Family Bike Trip 2022! </h3>
            <p>Page Count: {count} </p> */}
        </div>
      </div>

  );
}

export default App;
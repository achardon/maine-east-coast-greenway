import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from "react";

function App() {

  const [count, setCount] = useState(0);
  
  useEffect(() => {
    fetch ("/hello")
    .then(r => r.json())
    .then(data => setCount(data.count))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>East Coast Greenway</h1>
        <h2>MAINE</h2>
        <img src='https://www.greenway.org/uploads/attachments/cjyrp94jb215v00qiah4vmdr9-me.0.0.1522.1522.full.png' alt="maine map" />
        <p>Page Count: {count} </p>
      </header>
    </div>
  );
}

export default App;

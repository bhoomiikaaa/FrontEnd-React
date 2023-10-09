/*import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Deals from './Deals';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setItems(data));
  });

export default App; */
import React from "react";
//import './App.css'
import Counter  from "./configuration/counter";

function App() {
  return(
<div className="App">
<Counter />
</div>
  );
}

export default App;
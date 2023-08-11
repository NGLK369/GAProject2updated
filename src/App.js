import React from 'react';
import { Route, Routes, Link } from 'react-router-dom'; 
import './App.css';
import CurrencyConverter from './Components/CurrencyConverter';
import About from './Components/About'; 

const App = () => {
  return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<CurrencyConverter />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;

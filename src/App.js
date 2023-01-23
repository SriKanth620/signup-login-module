import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
       <Route path="/Login" element={<Login/>}/>
        <Route path="/" element={<Signup/>}/>
       </Routes> 
       </Router>
       {/* <h1>hello</h1> */}
       {/* <Signup/> */}
    </div>
  );
}

export default App;


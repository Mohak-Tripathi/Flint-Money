
import React from 'react';
import './App.css';
import Cal from './Calender/Cal'
import {Routes,Route} from "react-router-dom";




function App() {
 

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Cal/>}/>
      <Route path="/:year/:month" element={<Cal/> }/>
      <Route path="/:year" element={<Cal/> }/>

      </Routes>
    </div>
  );
}

export default App;

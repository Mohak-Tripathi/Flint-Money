import moment from 'moment';
import React, {useState} from 'react';
import './App.css';
import Cal from './Calender/Cal.jsx'

function App() {
  const [value, setValue] = useState(moment());
 
  return (
    <div className="App">

     
      <Cal value={value} onChange={setValue}/>  

    </div>
  );
}

export default App;

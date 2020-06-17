import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Jqer from './components/Jqer'

function App() {

  const [queryShow, setQueryShow] = useState(0)

  return (

    <div className="App">
      <button onClick={() => {queryShow ? setQueryShow(0) : setQueryShow(1)}}>show query</button>

      { queryShow ? <Jqer /> : null}
    </div>
  );
}

export default App;

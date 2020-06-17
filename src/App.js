import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Jqer from './components/Jqer'
import News from './components/News'

function App() {

  const [queryShow, setQueryShow] = useState(0)
  const [newsShow, setNewsShow] = useState(0)

  return (

    <div className="App">
      <button onClick={() => {queryShow ? setQueryShow(0) : setQueryShow(1)}}>show query</button>
      <button onClick={() => {newsShow ? setNewsShow(0) : setNewsShow(1)}}>show news</button>

      { queryShow ? <Jqer /> : null}
      { newsShow ? <News /> : null}
    </div>
  );
}

export default App;

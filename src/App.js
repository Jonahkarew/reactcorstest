import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Gif from './components/Gif';
import Cheer from './components/Cheer';
import Jqer from './components/Jqer'

function App() {
  const [gifShow, setGifShow] = useState(0);
  const [cheerShow, setCheerShow] = useState(0);
  const [queryShow, setQueryShow] = useState(0)
  return (
    <div className="App">
      <button onClick={() => {gifShow ? setGifShow(0) : setGifShow(1)}}>show gif</button>
      <button onClick={() => {cheerShow ? setCheerShow(0) : setCheerShow(1)}}>show cheer</button>
      <button onClick={() => {queryShow ? setQueryShow(0) : setQueryShow(1)}}>show query</button>
      { gifShow ? <Gif /> : null}
      { cheerShow ? <Cheer /> : null}
      { queryShow ? <Jqer /> : null}
    </div>
  );
}

export default App;

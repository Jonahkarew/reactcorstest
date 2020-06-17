import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Gif from './components/Gif';
import Cheer from './components/Cheer';
import Jqer from './components/Jqer'

function App() {
  const [gifShow, setGifShow] = useState(0)
  return (
    <div className="App">
      <button onClick={() => {gifShow ? setGifShow(0) : setGifShow(1)}}>show gif</button>
      { gifShow ? <Gif /> : null}
      <Cheer />
      <Jqer />
    </div>
  );
}

export default App;

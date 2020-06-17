import React, {useState, useEffect} from 'react';

function Gif() {
    const [gif, setGif] = useState()
    const getEm = () => {fetch("https://media.giphy.com/media/IbfgMjdG8qEOSYhffQ/giphy.gif")
    .then(res => 
       {setGif(res.url)}
        
    )}
    
    useEffect(() => {

     
          getEm()
        
    })

    return (
        <div className="gifContainer">
            <h1>this is the title</h1>
            <div className="gifMount">
                <img src={gif}></img>
            </div>    
        </div>
    )
}

export default Gif;

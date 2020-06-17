import React from 'react'

function Gif() {
    const url = "https://media.giphy.com/media/IbfgMjdG8qEOSYhffQ/giphy.gif";
    const getEm = () => {fetch("https://media.giphy.com/media/IbfgMjdG8qEOSYhffQ/giphy.gif")
    .then(res => console.log(res))}
    return (
        <div>
            
        </div>
    )
}

export default Gif

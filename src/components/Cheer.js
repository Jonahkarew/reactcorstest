import React, {useState, useEffect} from 'react';
import cheerio from 'cheerio';

function Cheer() {
    const [cheers, setCheers] = useState()

    const getData = () => {
        fetch("https://cheerio.js.org/").then(
            res => {
            // const $ = cheerio.load(res)
            console.log(res)
        })
    }

    useEffect(()=> {
        getData()
    }) 

    return (
        <div>
            
        </div>
    )
}

export default Cheer

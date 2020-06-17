import React, {useState, useEffect} from 'react'
import $ from 'jquery';

function Jqer() {
    const [id, setId] = useState();
    const [name, setName] = useState("veric talosson");
    const [world, setWorld] = useState("Phoenix");
    const [test, setTest] = useState()


    // useEffect(() => {
    //        $.get("https://cors-anywhere.herokuapp.com/https://na.finalfantasyxiv.com/lodestone/", function(res){
               
    //     setSource($(res).find("h2").first().text())
    //     console.log(res)
    //        })
     
    // });

    const getChar = () => {
        let url = `https://cors-anywhere.herokuapp.com/https://na.finalfantasyxiv.com/lodestone/character/?q=${name}&worldname=${world}&classjob=&race_tribe=&blog_lang=ja&blog_lang=en&blog_lang=de&blog_lang=fr&order=`;
        $.get(url, function(res){
            var idResult = $(res).find(".entry__link").attr("href")
            // .eq(0).children().first().attr("href")
            .replace("/lodestone/character/", "").replace("/", "");
            console.log(idResult)
            setId(idResult)
        })
    }



    return (
        <div>
            <input onChange={e => setName(e.target.value)} className="nameInput"></input>
            <input onChange={e => setWorld(e.target.value)}className="worldInput"></input>
            <button onClick={getChar}>Search</button>
            {id}
        </div>
    )
}

export default Jqer

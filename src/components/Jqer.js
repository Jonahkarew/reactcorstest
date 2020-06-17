import React, {useState, useEffect} from 'react'

function Jqer() {
    const [source, setSource] = useState(0);



    useEffect(() => {
           $.get("https://cheerio.js.org/", function(res){
               setSource(res)
                console.log(res)
           })
     
    })


    return (
        <div>
            {source}
        </div>
    )
}

export default Jqer

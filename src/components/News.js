import React, {useEffect, useState} from 'react';
import $ from 'jquery';

function News() {
    const [thisNews, setThisNews] = useState([])

    const getNews= () => {
        let url = `https://cors-anywhere.herokuapp.com/https://na.finalfantasyxiv.com/lodestone/`;
        let json = []
        $.get(url, function (res) {
            $(res).find(".news__list--topics").each(
                function(){
                    var newNews = {
                        title: $(this).children().first().text(),
                        image: $(this).children(".news__list--banner").children().first().children().first().attr("src"),
                        externalLink: `https://na.finalfantasyxiv.com/${$(this).children(".news__list--banner").children("a").attr("href")}`,
                        description: $(this).children(".news__list--banner").children(".mdl-text__xs-m16").text()
                    }
                    json.push(newNews)
                }
            )
            setThisNews(json)
        })
    }

    return (
        <div>
            <button onClick={getNews}>get news</button>
            {
                thisNews.map((newss) => {
                    return(
                        <div><a href={newss.externalLink}>
                            <img src={newss.image}></img>
                            <h2>{newss.title}</h2>
                            <p>{newss.description}</p>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default News

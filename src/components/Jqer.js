import React, { useState, useEffect } from 'react'
import $ from 'jquery';

function Jqer() {
    const [id, setId] = useState();
    const [name, setName] = useState("veric talosson");
    const [world, setWorld] = useState("Phoenix");
    const [character, setCharacter] = useState({})



    const getId = () => {
        let url = `https://cors-anywhere.herokuapp.com/https://na.finalfantasyxiv.com/lodestone/character/?q=${name}&worldname=${world}&classjob=&race_tribe=&blog_lang=ja&blog_lang=en&blog_lang=de&blog_lang=fr&order=`;
        $.get(url, function (res) {
            var idResult = $(res).find(".entry__link").attr("href")
                .replace("/lodestone/character/", "").replace("/", "");
            console.log(idResult)
            setId(idResult)
            getChar(idResult)
        })
    }

    const getChar = (id) => {
        $.get(`https://cors-anywhere.herokuapp.com/https://na.finalfantasyxiv.com/lodestone/character/${id}/`, function (res) {
            setCharacter(
                { name: $(res).find('.frame__chara__name').text(),
                title: $(res).find('.frame__chara__title').text(),
                level: parseInt($(res).find('.character__class__data p').text().replace('LEVEL', '').trim()),
                picture: $(res).find(".character__detail__image img").attr("src"),
                stats: {
                    attributes: {
                        strength: $(res).find(".character__param__list tr td").eq(0).text(),
                        dexterity: $(res).find(".character__param__list tr td").eq(1).text(),
                        vitality: $(res).find(".character__param__list tr td").eq(2).text(),
                        intelligence: $(res).find(".character__param__list tr td").eq(3).text(),
                        mind: $(res).find(".character__param__list tr td").eq(4).text(),
                    },
                    subAttributes: {
                        criticalHitRate: $(res).find(".character__param__list tr td").eq(5).text(),
                        determination: $(res).find(".character__param__list tr td").eq(6).text(),
                        directHitRate: $(res).find(".character__param__list tr td").eq(7).text(),
                    },
                    defensiveProperties: {
                        defense: $(res).find(".character__param__list tr td").eq(8).text(),
                        magicDefense: $(res).find(".character__param__list tr td").eq(9).text(),
                    },
                    physicalProperties: {
                        attackPower: $(res).find(".character__param__list tr td").eq(10).text(),
                        skillSpeed: $(res).find(".character__param__list tr td").eq(11).text(),
                    },
                    mentalProperties: {
                        attackMagicPotency: $(res).find(".character__param__list tr td").eq(12).text(),
                        healingMagicPotency: $(res).find(".character__param__list tr td").eq(13).text(),
                        spellSpeed: $(res).find(".character__param__list tr td").eq(14).text(),
                    },
                    role: {
                        tenacity: $(res).find(".character__param__list tr td").eq(15).text(),
                        piety: $(res).find(".character__param__list tr td").eq(16).text()
                    }
                },
                gear: {
                    weapon: {
                        weaponName: $(res).find(".db-tooltip__item__name").eq(0).text(),
                        weaponIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(0).text().replace("Item Level ", "")),
                    },
                    offHand: {
                        offHandName: $(res).find(`.character__detail__icon`).eq(1)
                                    .children()
                                    .first()
                                    .children(".item_detail_box")
                                    .children()
                                    .first()
                                    .children(".popup_w412_body_gold")
                                    .children().first()
                                    .children().first()
                                    .children(".db-tooltip__item__txt")
                                    .children("h2")
                                    .text(), 
                        offHandIlvl:
                                    parseInt($(res).find(`.character__detail__icon`).eq(1)
                                    .children()
                                    .first()
                                    .children(".item_detail_box")
                                    .children()
                                    .first()
                                    .children(".popup_w412_body_gold")
                                    .children(".db-tooltip__item__level")
                                    .text().replace("Item Level ", "")),
                    },
                    head: {
                        headName: $(res).find(".db-tooltip__item__name").eq(1).text(),
                        headIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(1).text().replace("Item Level ", "")),
                    },
                    chest: {
                        chestName: $(res).find(".db-tooltip__item__name").eq(2).text(),
                        chestIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(2).text().replace("Item Level ", "")),
                    },
                    arms: {
                        armsName: $(res).find(".db-tooltip__item__name").eq(3).text(),
                        armsIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(3).text().replace("Item Level ", "")),
                    },
                    belt: {
                        beltName: $(res).find(".db-tooltip__item__name").eq(4).text(),
                        beltIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(4).text().replace("Item Level ", "")),
                    },
                    pants: {
                        pantsName: $(res).find(".db-tooltip__item__name").eq(5).text(),
                        pantsIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(5).text().replace("Item Level ", "")),
                    },
                    shoes: {
                        shoesName: $(res).find(".db-tooltip__item__name").eq(6).text(),
                        shoesIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(6).text().replace("Item Level ", "")),
                    },
                    earring: {
                        earringName: $(res).find(".db-tooltip__item__name").eq(7).text(),
                        earringIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(7).text().replace("Item Level ", "")),
                    },
                    necklace: {
                        necklaceName: $(res).find(".db-tooltip__item__name").eq(8).text(),
                        necklaceIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(8).text().replace("Item Level ", "")),
                    },
                    wrist: {
                        wristName: $(res).find(".db-tooltip__item__name").eq(9).text(),
                        wristIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(9).text().replace("Item Level ", "")),
                    },
                    ring1: {
                        ring1Name: $(res).find(".db-tooltip__item__name").eq(10).text(),
                        ring1Ilvl: parseInt($(res).find(".db-tooltip__item__level").eq(10).text().replace("Item Level ", "")),
                    },
                    ring2: {
                        ring2Name: $(res).find(".db-tooltip__item__name").eq(11).text(),
                        ring2Ilvl: parseInt($(res).find(".db-tooltip__item__level").eq(11).text().replace("Item Level ", "")),
                    }
                }
            }
            )
        })
    }


    return (
        <div>
            <input onChange={e => setName(e.target.value)} className="nameInput"></input>
            <input onChange={e => setWorld(e.target.value)} className="worldInput"></input>
            <button onClick={getId}>Search</button>
            {id}
            {JSON.stringify(character)}
        </div>
    )
}

export default Jqer

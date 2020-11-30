import React, {useEffect, useState} from "react";
import about from "./about"
import Works from "./Works"
import MarkDown from "react-markdown";
import PersonSmall from "../people/PersonSmall";
import PostSmall from "../news/PostSmall";
import "./vilui.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {Tab, Tabs} from "react-bootstrap";
import ViluiNews from "client/pages/kni-vilui/ViluiNews";
import ViluiWorks from "client/pages/kni-vilui/ViluiWorks";

export default function Vilui(props) {
    const [works, setWorks] = useState()
    const [bossess, setBossess] = useState([])
    const ids = Works.map(w => w.bossId)
    ids.push('5f6037690d67ea51507b6301')

    useEffect(() => {
        props.api('/person/list', {where: {_id: {$in: ids}}}).then(r => {
            setBossess(r.list)
            const wo = Works.map(w => {
                w.boss = r.list.find(b => b.id === w.bossId);
                return w;
            })
            setWorks(wo)
        })

    }, [])

    if (!works) return <div/>
    return <div className="kni-vilui">

        <h1>Программа Комплексных научных исследований экологического состояния Вилюйской группы улусов</h1>
        <Tabs defaultActiveKey={'about'}>
            <Tab title={'О программе'} eventKey={'about'}>
                <MarkDown source={about}/>
            </Tab>
            <Tab title={'Научно-исследовательские работы'} eventKey={'works'}>
                <ViluiWorks works={works} {...props}/>
            </Tab>
            <Tab title={'Новости'} eventKey={'news'}>
                <ViluiNews {...props}/>
            </Tab>


            <Tab title={'Контакты'} eventKey={'contacts'}>
                <PersonSmall person={bossess.find(b => b.id === '5f6037690d67ea51507b6301')} presidium={true} {...props}/>
            </Tab>

        </Tabs>



    </div>
}

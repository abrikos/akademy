import React, {useEffect, useState} from "react";
import about from "./about"
import Works from "./Works"
import MarkDown from "react-markdown";
import PersonSmall from "../people/PersonSmall";
import "./vilui.sass";
import {Tab, Tabs} from "react-bootstrap";
import ViluiNews from "client/pages/kni-vilui/ViluiNews";
import ViluiWorks from "client/pages/kni-vilui/ViluiWorks";
import quotes from "./quotes"

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
        <Tabs defaultActiveKey={'works'}>
            <Tab title={'О программе'} eventKey={'about'}>
                <MarkDown source={about}/>
                <hr/>
                <div className="d-sm-flex justify-content-around my-5">
                    {quotes.map((q,i)=><div key={i} className="mx-5">
                        <div className="text-center"><img src={q.image} alt={q.name} height={200}/></div>
                        <h4>{q.name}</h4>
                        {q.text}
                        <hr/>
                    </div>)}
                </div>

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

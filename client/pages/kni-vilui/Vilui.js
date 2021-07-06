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
import i1 from "./images/1.jpg"

export default function Vilui(props) {
    const [works, setWorks] = useState()
    const [bossess, setBossess] = useState([])
    const [contacts, setContacts] = useState([])
    const ids = Works.map(w => w.bossId)
    const contactIds = ['5f6037690d67ea51507b6301', '5e816153fd74aa3202fe729e','5e80f5ba7549ce5472a10e06', '5e80f5ba7549ce5472a10df5']

    useEffect(() => {
        props.api('/person/list', {where: {_id: {$in: ids}}}).then(r => {
            setBossess(r.list)
            const wo = Works.map(w => {
                w.boss = r.list.find(b => b.id === w.bossId);
                return w;
            })
            setWorks(wo)
        })
        props.api('/person/list', {where: {_id: {$in: contactIds}}}).then(r => {
            setContacts(r.list)
        })

    }, [])

    if (!works) return <div/>
    return <div className="kni-vilui">

        <h1>Программа Комплексных научных исследований экологического состояния Вилюйской группы улусов</h1>
        <Tabs defaultActiveKey={'about'}>
            <Tab title={'О программе'} eventKey={'about'}>
                <img src={i1} alt="О программе" className="img-fluid"/>
                <MarkDown source={about}/>
                <hr/>
                <div className="d-sm-flex justify-content-around my-5">
                    {quotes.map((q, i) => <div key={i} className="mx-5">
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
            <Tab title={'Документы'} eventKey={'docs'}>
                <a href="https://drive.google.com/file/d/1tTrWmMfrcCXppDkAZwxmhTydmUlxD0HD/view?usp=sharing" target="_blank">Протокол заседания МК по контролю за реализациет мероприятий программы комплексных научных иследований эклогоического состояния Вилюйской группы улусов</a>
                <a href="https://drive.google.com/file/d/1f1OkNt6zI39EurD54BGfjk_FwefrKyav/view?usp=sharing" target="_blank" className="d-block">Выписка из протокола No 5

                    заседания ОУС по медико-биологическим наукам
                    Академии наук РС (Я) от «29» сентября 2020 года</a>
                <a href="https://drive.google.com/file/d/15YAGfGoAXKqj_MIWmWNpoMf7rv2TZOXz/view?usp=sharing" target="_blank" className="d-block">ВЫПИСКА
                    из протокола заседания

                    Объединенного ученого советапо наукам о Земле
                    Академии наук Республики Саха (Якутия)</a>
                <a href="https://drive.google.com/file/d/1gyf0ob1q9GIZfrdFlXx9MJdkmfrD8K5z/view?usp=sharing" target="_blank" className="d-block">Трехстороннее соглашение</a>
            </Tab>


            <Tab title={'Контакты'} eventKey={'contacts'}>
                <div className="d-sm-flex">
                {contacts.map(c => <PersonSmall person={c} key={c.id} {...props}/>)}
                </div>
            </Tab>

        </Tabs>


    </div>
}

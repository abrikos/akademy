import React, {useEffect, useState} from "react";
import about from "./about"
import Works from "./Works"
import MarkDown from "react-markdown";
import PersonSmall from "../people/PersonSmall";

const links = [
    'https://regnum.ru/news/society/2519620.html',
    'https://yakutiamedia.ru/news/764189/',
    'https://www.vesti14.ru/2019/02/13/v-yakutii-razrabotana-programma-kompleksnyh-nauchnyh-issledovanij-ekologii-i-zdorovya-naseleniya-vilyujskoj-gruppy-ulusov/',
    'https://iltumen.ru/news/17477',
    'http://www.sib-science.info/ru/institutes/tri-nauchnykh-instituta-iz-19062020',
    'https://yakutia.mk.ru/economics/2020/08/05/uchenye-izuchayut-ekologiyu-i-zdorove-zhiteley-vilyuyskoy-gruppy-ulusov.html',
    'http://www.ipgg.sbras.ru/ru/news/v-yakutii-provedut-nauchnoe-issledovanie-05082020',
    'https://rg.ru/2020/08/31/reg-dfo/parlament-iakutii-prokontroliroval-ekologicheskuiu-situaciiu-na-viliue.html',
    'https://www.sakhaparliament.ru/ru/natsproekty/ekologiya/2626-parlament-yakutii-prokontroliroval-ekologicheskuyu-situatsiyu-na-vilyue',
    'https://yakutia.info/article/191171',
    'http://www.sib-science.info/ru/heis/uchenye-zavershili-pervyy-etap-issledovaniy-22102020',
    'https://ysia.ru/nauchnye-issledovaniya-alrosa-vyrabotayut-novye-standarty-ekologicheskoj-kultury-v-yakutii/',
    'https://news.ykt.ru/article/109921',
    'https://ysia.ru/rassmotreny-promezhutochnye-itogi-nauchnyh-issledovanij-ekologicheskogo-sostoyaniya-vilyuya/',
]

export default function Vilui(props) {
    const [works, setWorks] = useState()
    const [bossess, setBossess] = useState([])
    const [news, setNews] = useState([])
    const ids = Works.map(w => w.bossId)
    ids.push('5f6037690d67ea51507b6301')
    useEffect(() => {
        props.api('/person/list', {where: {_id: {$in: ids}}}).then(r => {
            setBossess(r.list)
            const wo = Works.map(w => {
                w.boss = r.list.find(b => b.id === w.bossId);
                return w;
            })
            console.log(ids)
            setWorks(wo)

        })
        props.api('/news/from/urls', links)
            .then(setNews)
    }, [])

    console.log('zzzzzzzzzz', news)
    if (!works) return <div/>


    return <div>
        <h1>Программа Комплексных научных исследований экологического состояния Вилюйской группы улусов</h1>
        <h2>О ПРОГРАММЕ</h2>
        <MarkDown source={about}/>

        <h2>НАУЧНО-ИССЛЕДОВАТЕЛЬСКИЕ РАБОТЫ</h2>
        {works.map((w, i) => <div key={i}>
            <h3>{w.name}</h3>
            <div className="row">
                <div className="col-sm-4">
                    Научный руководитель НИР:
                    <PersonSmall person={w.boss} presidium={true} {...props}/>
                </div>
                <div className="col-sm-8"><MarkDown source={w.info}/></div>
            </div>

        </div>)}
        <div>
            10 сентября состоялся Президиум Академии наук, на котором были заслушаны доклады от исполнителей о ходе
            работ (Протокол №16 от 10 сентября 2020 г.).
            <br/>Согласно Договора с Целевым фондом будущих поколений от исполнителей НИР получены промежуточные отчеты,
            организованы заседания Объединенных ученых советов Академии наук РС(Я) по их рассмотрению. Получены
            экспертные заключения по предварительным отчетам. Осуществляется подготовка расширенного заседания Высшего
            совета Фонда будущих поколений, на котором будут рассмотрены промежуточные отчеты Исполнителей, с
            заключениями экспертов.
        </div>
        <span>Мониторинг состояния пойменных экосистем реки Вилюй и её притоков в 2020-2021 гг.</span>
        Научно-обоснованная оценка состояния здоровья населения, проживающего в бассейне реки Вилюй и ее притоков, с
        разработкой комплекса медико-социальных мероприятий по оздоровлению.
        «Оценка возможности обеспечения альтернативными источниками водоснабжения населенных пунктов в долине р. Вилюй и
        ее притоков.
        ДОКУМЕНТЫ
        <h2>НОВОСТИ</h2>
        {news.map((n,i)=><div key={i}>{JSON.stringify(n)}</div>)}

        <h2>КОНТАКТЫ</h2>
        <PersonSmall person={bossess.find(b=>b.id==='5f6037690d67ea51507b6301')} presidium={true} {...props}/>



    </div>
}
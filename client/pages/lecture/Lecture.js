import React, {useEffect, useState} from "react";
import MarkDown from "react-markdown";

const text = `Расписание:

**28 сентября 2020 г. (понедельник):**
        
**16.00** - «Познавательное и эмоционально-личностное развитие современных дошкольников в Якутии». Сотрудники кафедры психологии образования и педагогики факультета психологии МГУ имени М.В. Ломоносова н.с. Гаврилова М.Н. и н.с. Бухаленкова Д.А., к.психолог.н., под руководством заведующего кафедрой Вераксы А.Н., член-корреспондент РАО, д.психолог.н., профессор.
        
**18.00** – награждение активистов проекта «Растем с Россией» по итогам 1 года работы. Семенов Ю.И., руководитель НОЦ Академии наук Республики Саха (Якутия).

**29 сентября 2020 г. (вторник):**
        
**16.00** - семинар «Методика эффективного обучение чтению: опыт Бердигестяхской СОШ им. С.П. Данилова». Потапова А.К., Николаева М.И., кафедра начального образования Бердигестяхской СОШ им. С.П. Данилова.

**30 сентября 2020 г. (среда):**
        
**16.00** - видео-лекция «Раннее выявление и развитие одаренности». Егоров В.А., к.ф.-м.н., доцент, генеральный директор Целевого фонда будущих поколений Республики Саха (Якутия), г. Якутск.
        
**17.00** – видео лекция «Природа и понятие «одаренность», «талант»». Семенов Ю.И., руководитель НОЦ Академии наук Республики Саха (Якутия).

**01 октября 2020 г. (четверг):**
        
**16.00** - видео-лекция «Будущее дошкольного образования». Комарова И.И., к.и.н., проректор по науке Международной педагогической академии дошкольного образования, г. Москва.
        
**17.00** - семинар «Равные условия для всех детей: о развитии детей с раннего возраста с точки зрения науки». Семенов Ю.И., руководитель НОЦ Академии наук Республики Саха (Якутия).`

export default function Lecture(props) {
    const [list, setList] = useState()
    useEffect(() => {
        props.api('/lecture/list',{sort:[['createdAt',-1]]})
            .then(setList)
    }, [])


    return <div>
        <h1>Курсы повышения квалификации
            «Развитие дошкольного образования: исследовательское обучение»
            с 23 сентября по 03 октября 2020 г.</h1>

        <div className="alert alert-info">Для того чтобы зафиксировать свое присутствие на курсе оставьте комментарий "Присутствовал(а)" к соответствющему видео на YouTube</div>
        {list && list.list.map(l => <div key={l.id}>
            <h3>{l.name}</h3>
            <small>{l.date}</small> | Лектор: <strong>{l.lector}</strong>
            <MarkDown source={l.description}/>
            <hr/>
        </div>)}

        <hr/>
        <MarkDown source={text}/>



    </div>

}
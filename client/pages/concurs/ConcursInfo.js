import React from 'react';
import {t} from "client/components/Translator"
import MyBreadCrumb from "client/components/MyBreadCrumb";
import {A} from "hookrouter"
import moment from "moment";
import info from "./info.json"
import logo from "./uoy_logo.png"

export default function ConcursInfo(props) {

    return <div>
        <MyBreadCrumb items={[
            {label: t('Конкурс')},
            {label: t('Информация')},
        ]}/>
        {/*<ConcursMenu/>*/}
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <img src={logo} alt="logo"/>
            <div>
                <h1>1-й городской конкурс юных физиков и математиков
                    Академии наук Республики Саха (Якутия)
                </h1>
                <h3 style={{textAlign:'center'}}>Дата проведения: 28-29 апреля 2025</h3>
            </div>
        </div>

        <div style={{background: '#EEE'}}>
            {moment([2025, 3, 28]).diff(moment(), 'hours') < 0 ?
                <div style={{display: 'flex', justifyContent: 'space-between'}} className={'banner'}>
                    <div style={{background: 'green', color: 'white', padding: '10px'}}>
                        <a href="/tasks.doc" style={{color: "white", textDecoration: 'underline'}}>Задания 5-6 класс</a>
                    </div>
                    <div style={{background: 'green', color: 'white', padding: '10px'}}>
                        <a href="/tasks.doc" style={{color: "white", textDecoration: 'underline'}}>Задания 7-8 класс</a>
                    </div>
                    <div style={{background: 'green', color: 'white', padding: '10px'}}>
                        <a href="/tasks.doc" style={{color: "white", textDecoration: 'underline'}}>Задания 9-10
                            класс</a>
                    </div>
                    <div style={{background: 'blue', color: 'white', padding: '10px'}}>
                        <A style={{color: "white", textDecoration: 'underline'}} href="/concurs/form">Сдать задания</A>
                    </div>
                </div>
                :
                <div className={'banner'}>Задания появятся 28 апреля</div>

            }
        </div>
        <div className={'banner'}>Следите за новостями на главной странице Академии наук РС(Я)</div>

        {info.text.split('\n').map((line, i) => <p>{line}</p>)}
        <p><a href="/concurs-reglament.docx">Положение конкурса</a></p>
        <h3>Контакты</h3>
        <p>Захаров Георгий Григорьевич: +7 914 225-62-92</p>
    </div>

}


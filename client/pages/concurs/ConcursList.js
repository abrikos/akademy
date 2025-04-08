import React, {useEffect, useState} from 'react';
import {t} from "client/components/Translator"
import MyBreadCrumb from "client/components/MyBreadCrumb";
import {Button, Input} from "reactstrap";
import {A} from "hookrouter"
import ConcursMenu from "./ConcursMenu";

export default function ConcursList(props) {
    const [list, setList] = useState({list:[]});

    function load(){
        props.api('/concurs/list')
            .then(setList)
    }
    useEffect(() => {
        load()
    },[])

    return <div>
        <MyBreadCrumb items={[
            {label: t('Конкурс')},
            {label: t('Список участников')},
        ]}/>
        <ConcursMenu/>
        <h1>Список участников</h1>
        {list.list.map((item, index) => (<div>zz{item.fio}</div>))}
    </div>

}


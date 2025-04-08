import React, {useEffect, useState} from 'react';
import {t} from "client/components/Translator"
import MyBreadCrumb from "client/components/MyBreadCrumb";
import {Button, Input} from "reactstrap";
import {A} from "hookrouter"
import ConcursMenu from "./ConcursMenu";

export default function ConcursDone(props) {
    return <div>
        <MyBreadCrumb items={[
            {label: t('Конкурс')},
            {label: t('Список участников')},
        ]}/>

        <h1>Ваши ответы приняты</h1>

    </div>

}


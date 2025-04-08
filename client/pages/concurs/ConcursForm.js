import React, {useEffect, useState} from 'react';
import {t} from "client/components/Translator"
import MyBreadCrumb from "client/components/MyBreadCrumb";
import {Button, Input} from "reactstrap";
import ConcursMenu from "./ConcursMenu";
//do something...

export default function ConcursForm(props) {
    const [errs, setErrors] = useState({});
    const [done, setDone] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const errors = {}
        if (!formData.get('fio')) errors.fio = 'Укажите ФИО'
        if (!formData.get('school')) errors.school = 'Укажите школу'
        if (!formData.get('email').match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/)) errors.email = 'Укажите валидный e-mail'
        if (!e.target.file.value) errors.file = 'Добавьте файл с ответами'
        if (Object.keys(errors).length) {
            console.log(e.target.file.value)
            setErrors(errors)
            return
        }
        props.api('/concurs/form', formData)
            .then((res) => {
                console.log(res)
                setDone(true)
            })
            .catch((err) => {
                console.log(err)
                if (err.error === 406) {
                    errors.file = 'Необходимо прикрепить файл с ответами'
                    setErrors(errors)
                }
            })

    }

    return <div>
        <MyBreadCrumb items={[
            {label: t('Конкурс'), href: '/concurs/info'},
            {label: t('Сдача заданий')},
        ]}/>
        {done ? <h1>Ваши ответы приняты</h1> :<div>
            <h1>Сдача заданий</h1>
            <form onSubmit={handleSubmit} encType={"multipart/form-data"}>
                <label>ФИО</label>
                <Input name="fio"/>
                <div className={'errors'}>{errs.fio}</div>
                <label>Школа</label>
                <Input name="school"/>
                <div className={'errors'}>{errs.school}</div>
                <label>E-mail</label>
                <Input name="email" value={'aa@aa.com'}/>
                <div className={'errors'}>{errs.email}</div>
                <Input name="file" type="file"/>
                <div className={'errors'}>{errs.file}</div>
                <Button type="submit">Отправить</Button>
            </form>
        </div>}

    </div>

}


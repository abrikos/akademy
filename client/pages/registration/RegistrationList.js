import React, {useEffect, useState} from "react";
import MarkDown from "react-markdown";

export default function RegistrationList(props) {
    const [list, setList] = useState()
    const [schema, setSchema] = useState()
    useEffect(() => {
        props.api('/registration/schema')
            .then(setSchema)
        props.api('/registration/list',{sort:[['createdAt',-1]]})
            .then(setList)
    }, [])
    console.log(schema)

    return <div>
        <h1>Список регистраций «ИНВЕСТИЦИИ В РАННЕЕ ДЕТСТВО - ОСНОВА БУДУЩЕГО»</h1>

        <div className="alert alert-info">Для того чтобы зафиксировать свое присутствие на курсе оставьте комментарий "Присутствовал(а)" к соответствющему видео на YouTube</div>
        {schema && list && list.list.map(l => <div key={l.id}>
            {schema.fields.map(f=><div key={f}>
                {f.options.label}: {l[f.name]}
            </div>)}
            Дата: {l.date}
            <hr/>
        </div>)}

        <hr/>




    </div>

}

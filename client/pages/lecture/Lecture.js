import React, {useEffect, useState} from "react";
import MarkDown from "react-markdown";

export default function Lecture(props) {
    const [list, setList] = useState()
    useEffect(() => {
        props.api('/lecture/list',{sort:[['createdAt',-1]]})
            .then(setList)
    }, [])


    return <div>
        <h1>Лекции</h1>
        <div className="alert alert-info">Для того чтобы зафиксировать свое присутствие на лекции оставьте комментарий к видео "Присутствовал(а)"</div>
        {list && list.list.map(l => <div key={l.id}>
            <h3>{l.name}</h3>
            <small>{l.date}</small> | Лектор: <strong>{l.lector}</strong>
            <MarkDown source={l.description}/>
            <hr/>
        </div>)}
    </div>

}

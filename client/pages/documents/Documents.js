import React, {useEffect, useState} from "react";
import AdminLink from "client/components/AdminLink";
import moment from "moment";

export default function (props) {
    const [list, setList] = useState([])

    useEffect(() => {
        const filter = {where: {published: true}};
        if (props.type === 'presidium') {
            filter.where.isPresidium = true
        } else {
            filter.where.isPresidium = {$ne: true}
        }
        props.api('/document/list', filter)
            .then(r => setList(r.list))
    }, [props.type])

    const years = [...new Set(list.map(l=>moment(l.date).format('YYYY')))]

    return <div>
        <h1>{props.type === 'presidium' ? 'Протоколы Президиума':'Документы'}</h1>
        {years.map(y=><div key={y}>
            <strong>{y}</strong><hr/>
            <ul>
            {list.filter(l=>moment(l.date).format('YYYY')===y).map(l => <li key={l.id}>{moment(l.date).format('DD.MM.YY')} <a href={l.link} target="_blank" rel="noopener noreferrer">{l.header}</a> <AdminLink model={l} {...props}/> </li>)}
            </ul>
        </div>)}

    </div>
}

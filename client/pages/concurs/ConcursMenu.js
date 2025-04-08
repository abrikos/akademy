import React from 'react';

import {A} from "hookrouter"
import {createBrowserHistory} from "history";
import  "./concurs.sass"

export default function ConcursMenu(props) {
    const history = createBrowserHistory()
    const routes = [
        {path: '/concurs/form', label: 'Регистрация'},
        {path: '/concurs/list', label: 'Список участников'},
        {path: '/concurs/info', label: 'Информация'},
    ]
    return <div className="concurs-menu">
        {/*{routes.map(r => (history.location.pathname === r.path ? <span>{r.label}</span> : <A href={r.path}>{r.label}</A>))}*/}
    </div>

}


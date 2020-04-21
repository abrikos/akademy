import MarkDown from "react-markdown";
import React from "react";
import {A} from "hookrouter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import AdminLink from "client/components/AdminLink";

export default function (props) {
    const p = props.person;
    return <div className="person-large">
        <div className="supervisor-image">
            <img src={p.photo} alt={p.fio}/>
        </div>

        <div className="supervisor-text">
            <h4><A href={p.link}>{p.fio}</A></h4>
            <div className="status">{p.presidiumStatus}</div>
            <div className="status">{p.memberStatus}</div>
            <div className="status">{p.rank}</div>
            <MarkDown source={p.education}/>
            <MarkDown source={p.description}/>
            <AdminLink model={p} {...props}/>
        </div>
    </div>
}
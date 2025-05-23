import React, {useEffect, useState} from "react";
import MarkDown from "react-markdown";
import "./division.sass"
import Loader from "client/components/Loader";
import AdminLink from "client/components/AdminLink";
import PersonSmall from "client/pages/people/PersonSmall";
import {A} from "hookrouter"
import Email from "client/components/Email";
import Phone from "client/components/Phone";

export default function Division(props) {
    const [data, setData] = useState();

    useEffect(() => {
        setData(null)
        props.api(`/division/${props.id}/view`).then(setData)
    }, [props.id]);

    if (!data) return <Loader/>;
    return <div className="division" key={props.page}>
        <h1 className="text-uppercase">{data.name}</h1>
        <div className="row">
            {data.chief && <div className="col-md-4 division-card">
                <div className="fio"><A href={data.chief.link}>{data.chief.fio}</A></div>
                <div className="status">{data.chief.status}</div>
                <div className="rank">{data.chief.rank}</div>


            </div>}

        </div>
        <div className="row">
            <div className="col-md-4">
                {data.chief && <div className="division-card">
                    <picture>
                        <img key={props.page} src={data.chief.photo} alt={data.name}/>
                    </picture>

                </div>}
                <div className="mt-5"><MarkDown source={data.underPhoto}/></div>

            </div>
            <div className="col-md-8 text">
                <div>
                    <AdminLink model={data} {...props}/>
                    <MarkDown source={data.description}/>
                    {(data.phone || data.email) && <div>
                        <h3>Контакты</h3>
                        <div><Phone phone={data.phone}/></div>
                        <div><Email email={data.email}/></div>
                        <hr/>
                    </div>}
                    {!!data.persons.length && <div>
                        <h3>Все сотрудники</h3>
                        <div className="d-flex flex-wrap">
                            <PersonSmall person={data.chief} {...props}/>
                            {data.persons.map(p => <PersonSmall person={p} key={p.id} {...props}/>)}
                        </div>
                    </div>}

                </div>
            </div>
        </div>


    </div>
}

import React, {useEffect, useState} from 'react';
import AdminLink from "client/components/AdminLink";
import VideoPlay from "client/components/VideoPlay";
export default function Lectors(props){
    const [videos, setVideos] = useState([])
    const uids =[
        'O9vxcq1IgHI',
        'itcQP_O5WQ4',
        'Tv9Lgty2kFw',
        'HBqXZgvo3zc',
        'IDgcDuHpReQ',
        'S1Q4ujriDto',
        'xjzNFi3IiZo',
    ]

    useEffect(()=> {
        init()
    }, []);

    async function init(){
        const v = []
        for(const uid of uids){
            const video = await props.api('/video/lector', {uid})
            console.log(video)
            v.push(video)
        }
        setVideos(v)
    }

    return <div className="container">
        <h1>Лекторы</h1>
        {videos.map((v,i)=><div><div key={i} className="row">
            <div className="col-sm-3">
                <img src={`/lectors/${i+1}.png`} className="img-fluid" style={{width:"100%"}}/>

            </div>
            <div className="col-sm-9">
                <h3>{v.name}</h3>
                <VideoPlay video={v} width="100%"/>
                {v.text}
            </div>
        </div><hr/></div>)}
    </div>
}

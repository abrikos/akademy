import React, {useEffect, useState} from 'react';
import VideoPlay from "client/components/VideoPlay";

export default function Lectors(props) {
    const [videos, setVideos] = useState([])
    const uids = [
        'O9vxcq1IgHI',
        'itcQP_O5WQ4',
        'Tv9Lgty2kFw',
        'HBqXZgvo3zc',
        'IDgcDuHpReQ',
        'S1Q4ujriDto',
        'xjzNFi3IiZo',
    ]

    useEffect(() => {
        init()
    }, []);

    async function init() {
        const video = await props.api('/video/lectors', {uids})
        setVideos(video)
    }

    return <div className="container">
        <h1>Лекторы</h1>
        {videos.map((v, i) => <div className="alert alert-info my-5">
            <div key={i} className="row">
                <div className="col-sm-3">
                    <img src={`/lectors/${v.uid}.png`} className="img-fluid" style={{width: "100%"}}/>

                </div>
                <div className="col-sm-9">
                    <h3>{v.name} </h3>
                    <small>{v.date}</small>
                    <VideoPlay video={v} width="100%"/>
                    {v.text}
                </div>
            </div>

        </div>)}
    </div>
}

import React, {useEffect, useState} from "react";
import PostSmall from "client/pages/news/PostSmall";

export default function ViluiNews(props){
    const [news, setNews] = useState([])
    useEffect(() => {
        props.api('/post/list', {where: {isVilui: true}})
            .then(r => setNews(r.list))

    }, [])
    return <div>
        <div className="d-sm-flex flex-wrap">
            {news.map((n, i) => <PostSmall key={n.id} post={n}/>)}
        </div>
    </div>
}

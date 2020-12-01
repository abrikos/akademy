import React, {useState} from "react";
import PersonSmall from "client/pages/people/PersonSmall";
import MarkDown from "react-markdown";

export default function ViluiWorks(props) {
    const works = props.works;
    const [worksView, setWorksView] = useState(works[0])

    return <div className="row">
        <div className="col text-justify">
            <ol>
            {works.map((w, i) =>
                <li key={i} className={`p-2 ${w === worksView ? 'bg-info' : ''}`}>
                    <span className="pointer" onClick={() => setWorksView(w)}> {w.name}</span>
                </li>
            )}
            </ol>
        </div>
        <div className="col">
            {worksView && <div>
                {worksView.photo && <img src={worksView.photo} className="img-fluid" alt={worksView.name}/>}
                <h3>{worksView.name}</h3>

                <div className="">
                    Научный руководитель НИР:
                    <PersonSmall person={worksView.boss} presidium={true} {...props}/>
                </div>
                <div>
                    <MarkDown source={worksView.info}/>
                </div>
            </div>}
        </div>

        <hr/>
    </div>
}

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
        <div className="alert alert-info">
            <p>10 сентября состоялся Президиум Академии наук, на котором были заслушаны доклады от исполнителей о ходе
                работ (Протокол №16 от 10 сентября 2020 г.).</p>
            <p>Согласно Договора с Целевым фондом будущих поколений от исполнителей НИР получены промежуточные отчеты,
            организованы заседания Объединенных ученых советов Академии наук РС(Я) по их рассмотрению. Получены
            экспертные заключения по предварительным отчетам. Осуществляется подготовка расширенного заседания Высшего
            совета Фонда будущих поколений, на котором будут рассмотрены промежуточные отчеты Исполнителей, с
                заключениями экспертов.</p>
            <p>Мониторинг состояния пойменных экосистем реки Вилюй и её притоков в 2020-2021 гг.
            Научно-обоснованная оценка состояния здоровья населения, проживающего в бассейне реки Вилюй и ее притоков, с
            разработкой комплекса медико-социальных мероприятий по оздоровлению.
            «Оценка возможности обеспечения альтернативными источниками водоснабжения населенных пунктов в долине р. Вилюй и
            ее притоков.</p>
        </div>

        <hr/>
    </div>
}

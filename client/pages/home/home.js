import React, {useEffect, useState} from 'react';
import {A} from "hookrouter"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import PostSmall from "client/pages/news/PostSmall";
import FeedbackForm from "client/pages/home/FeedbackForm";
import "./home.sass"
import woman from "./research/woman.jpeg"
import intell from "./intellectual/home2.jpeg"
import vilui from "client/pages/kni-vilui/images/1.jpg"
import DateFormat from "client/components/DateFormat";


export default function Home(props) {
    const [news, setNews] = useState([]);
    const [fixed, setFixed] = useState([]);
    const [newsLast, setNewsLast] = useState();
    const [sakhaStat, setSakhaStat] = useState([]);
    useEffect(() => {
        props.api('/post/search', {where: {published: true, isFixed:true}, limit: 15})
            .then(setFixed)
        props.api('/post/search', {where: {published: true, isFixed:{$ne:true}}, limit: 15})
            .then(res => {
                const last = [];
                last.push(res.shift());
                last.push(res.shift());
                last.push(res.shift());
                setNewsLast(last)
                setNews(res)
            })
        props.api('/sakha-stat')
            .then(setSakhaStat)
    }, []);

    function formatLastNews(post) {
        return post && <div className="first-news">
            <div className="first-news-img">
                {post.isMassMedia && <a href={post.link} target="_blank" rel="noopener noreferrer"><img src={post.previewPath} alt={post.header} className="img-preview"/></a>}
                {!post.isMassMedia && <A href={post.link}><img src={post.previewPath} className="img-preview" alt={'cover'}/></A>}
            </div>
            <div><DateFormat date={post.date}/></div>
            {post.isMassMedia && <a href={post.link} target="_blank" rel="noopener noreferrer">{post.header}</a>}
            {!post.isMassMedia && <A href={post.link}>{post.header}</A>}
        </div>
    }



    return <div className="home py-2">
        <div className="row">
            {newsLast && <div className="col-sm-4">
                {formatLastNews(newsLast[0])}
                <div className="row rest-news">
                    <div className="col-sm-6">{formatLastNews(newsLast[1])}</div>
                    <div className="col-sm-6">{formatLastNews(newsLast[2])}</div>
                </div>
            </div>}
            <div className="col-sm-8">
                <div className="text-center">Все новости</div>
                <div className="d-flex flex-wrap">
                    {news.map(n => <PostSmall key={n.id} post={n}/>)}
                </div>
            </div>

        </div>

        <div className="d-flex flex-wrap justify-content-center">
            {fixed.map(n => <div key={n.id} className="w-25 m-3">{formatLastNews(n)}</div>)}
        </div>

        <div className="alert alert-info">
            <h2>Оперативные показатели.</h2>
            <table className="table">
                <tbody>
                {sakhaStat.map((r, i) => <tr key={i}>
                    {r.map((c, j) => <td key={j}>{c}</td>)}
                </tr>)}
                </tbody>
            </table>
            <small>Информация с сайта <a href="https://sakha.gks.ru/" target="_blank"  rel="noopener noreferrer">sakha.gks.ru</a> </small>
        </div>
        <hr/>

        <div className="my-5">
            <h1 className="text-center my-3">Проекты</h1>
            <div className="d-sm-flex flex-wrap justify-content-center">
                <div className="mx-5">
                    <img src={woman} alt="Интеллектуальная собственность" className="img-fluid"/>
                    <h2>Комплексные научные исследования</h2>
                    Президентом Российской Федерации В.В. Путиным дано поручение по организации комплексных научных исследований в Республике Саха (Якутия), направленных на развитие производительных сил и социальной сферы Республики, с проведением комплексной научной экспедиции с участием Российской академии наук.
                    <br/>
                    <A href={'/research'}>ПОДРОБНЕЕ <FontAwesomeIcon icon={faArrowRight}/></A>
                </div>

                <div className="mx-5">
                    <img src={intell} alt="Интеллектуальная собственность" className="img-fluid"/>
                    <h2>Интеллектуальная собственность</h2>
                    Центр интеллектуальной собственности РС(Я) осуществляет патентно-информационные работы и исследования по обоснованию принимаемых решений в отношении интеллектуальной собственности; осуществляет нормативно-методическое обеспечение работы по охране интеллектуальной собственности.
                    <br/>
                    <A href={'/intellectual'}>ПОДРОБНЕЕ <FontAwesomeIcon icon={faArrowRight}/></A>
                </div>

                <div className="mx-5">
                    <img src={vilui} alt="КНИ Вилюй" className="img-fluid"/>
                    <h2>КНИ Вилюй</h2>
                    Программа Комплексных научных исследований экологического состояния Вилюйской группы улусов и здоровья населения, проживающего на этих территориях, разработана во исполнение Указа Указ Главы Республики Саха (Якутия) от 27 сентября 2018 г. №2 «Об экологическом благополучии РС(Я)» на 2019-2024 годы» в целях сохранения окружающей среды в условиях нарастания антропогенного и технического воздействия на окружающую среду, изменения климата.
                    <br/>
                    <A href={'/kni-vilui'}>ПОДРОБНЕЕ <FontAwesomeIcon icon={faArrowRight}/></A>
                </div>
            </div>
        </div>


        <div className="my-5">
            <h2 className="text-center">Общественная приёмная президента АН РС(Я)</h2>
            <div className="text-center">
                Вы можете задать вопрос президенту. Обращения принимаются круглосуточно.
                <FeedbackForm {...props}/>
            </div>
        </div>

    </div>
}





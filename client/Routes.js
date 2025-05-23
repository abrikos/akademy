import React from "react";
import Home from "client/pages/home/home";
import Login from "client/pages/login/login";
import Cabinet from "client/pages/cabinet/cabinet";
import PostView from "client/pages/news/PostView";
import AdminIndex from "client/pages/admin/AdminIndex";
import SearchResult from "client/components/search/SearchResult";
import Contacts from "client/pages/contacts/contacs";
import Static from "client/pages/home/Static";
import Division from "client/pages/division/Division";
import PhoneBook from "client/pages/phone-book/PhoneBook";
import Council from "client/pages/council/Council";
import SiteMap from "client/pages/SiteMap";
import Apparatus from "client/pages/Apparatus";
import Edition from "client/pages/edition/Edition";
import About from "client/pages/about/About";
import Research from "client/pages/home/research/Research";
import Intellectual from "client/pages/home/intellectual/Intellectual";
import VideoList from "client/pages/video/VideoList";
import AboutRepublic from "client/pages/about-republic/AboutRepublic";
import Search from "client/pages/search/Search";
import Partners from "client/pages/partners/Partners";
import MassMedia from "client/pages/mass-media/MassMedia";
import Organisations from "client/pages/science-org/Organisations";
import Gov from "client/pages/gov/Gov";
import NewsPage from "client/pages/news/NewsPage";
import MeetingAbout from "client/pages/council/CouncilAbout";
import SakhaHistory from "client/pages/projects/sakha-history/SakhaHistory";
import ProjectRecycle from "client/pages/projects/recycle/ProjectRecycle";
import Documents from "client/pages/documents/Documents";
import WebResources from "client/pages/web-resources/WebResources";
import Presidium from "client/pages/presidium/Presidium";
import PersonList from "client/pages/people/PersonList";
import Election from "client/pages/election/Election";
import PersonView from "client/pages/people/PersonView";
import Covid from "client/pages/home/Covid";
import TestPage from "client/pages/home/TestPage";
import Graph from "client/pages/modeling/Graph";
import Fortran from "client/pages/fortran/Fortran";
import JournalGroup from "client/pages/JournalGroup";
import Conference from "client/pages/conference/Conference";
import ConferencePerson from "client/pages/conference/ConferencePerson";
import Power8 from "client/pages/power8/Power8";
import Noc from "client/pages/projects/noc/Noc";
import CountDown from "client/pages/countdown/CountDown";
import Lecture from "client/pages/lecture/Lecture";
import Registration from "client/pages/registration/Registration";
import RegistrationList from "client/pages/registration/RegistrationList";
import Vilui from "./pages/kni-vilui/Vilui";
import Lectors from "client/pages/lectors/Lectors";
import AntiCorruption from "./pages/AntiCorruption";
import NecSert from './pages/nec/NecSert';
import ConcursForm from "./pages/concurs/ConcursForm";
import ConcursList from "./pages/concurs/ConcursList";
import ConcursInfo from "./pages/concurs/ConcursInfo";
import ConcursDone from "./pages/concurs/ConcursDone";

export default function Routes(props) {

    return {
        "/concurs/form": () => <ConcursForm {...props}/>,
        "/concurs/list": () => <ConcursList {...props}/>,
        "/concurs/info": () => <ConcursInfo {...props}/>,
        "/concurs/done": () => <ConcursDone {...props}/>,
        "/": () => <Home {...props}/>,
        "/gov": () => <Gov {...props}/>,
        "/lector": () => <Lectors {...props}/>,
        "/nec-cert": () => <NecSert {...props}/>,
        "/lecture": () => <Lecture {...props}/>,
        "/science-org": () => <Organisations {...props}/>,
        "/partners": () => <Partners {...props}/>,
        "/mass-media": () => <MassMedia {...props}/>,
        "/web-resources": () => <WebResources {...props}/>,
        "/cabinet": () => <Cabinet {...props}/>,
        "/search": () => <Search {...props}/>,
        "/about-republic": () => <AboutRepublic {...props}/>,
        "/about": () => <About {...props}/>,
        "/phone-book": () => <PhoneBook {...props}/>,
        "/contacts": () => <Contacts {...props}/>,
        "/login": () => <Login {...props}/>,
        "/wp-admin": () => <Login {...props}/>,
        "/research": () => <Research {...props}/>,
        "/intellectual": () => <Intellectual {...props}/>,
        "/countdown": () => <CountDown {...props}/>,
        "/project/noc": () => <Noc {...props}/>,
        "/admin/:control": (params) => <AdminIndex {...params} {...props}/>,
        "/admin/:control/:id/update": (params) => <AdminIndex {...params} {...props}/>,
        "/news": () => <NewsPage {...props}/>,
        "/video": () => <VideoList {...props}/>,
        "/edition": () => <Edition {...props}/>,
        //"/registration": () => <Registration {...props}/>,
        "/registration/list": () => <RegistrationList {...props}/>,
        "/presidium/:type": (params) => <Presidium {...params} {...props}/>,
        "/static/:path": (params) => <PostView {...params} {...props}/>,
        "/news/:id": (params) => <PostView {...params} {...props}/>,
        "/news/:id/:path": (params) => <PostView {...params} {...props}/>,
        "/kni-vilui": (params) => <Vilui {...params} {...props}/>,

        "/documents/:type": (params) => <Documents {...params} {...props}/>,
        "/project/recycle": () => <ProjectRecycle {...props}/>,
        "/project/sakha-history": () => <SakhaHistory {...props}/>,
        "/project/sakha-history/:tom": (params) => <SakhaHistory {...params} {...props}/>,
        "/apparatus": () => <Apparatus {...props}/>,
        "/journal": () => <JournalGroup {...props}/>,
        "/anti-corruption": () => <AntiCorruption {...props}/>,
        //"/persons/:type": (params) => <PersonListLarge {...params} {...props}/>,
        "/site-map": () => <SiteMap {...props}/>,
        "/static/:page": (params) => <Static {...params} {...props}/>,
        "/division/:id/:path": (params) => <Division {...params} {...props}/>,
        "/council/:id/:path": (params) => <Council {...params} {...props}/>,
        "/council-about": (params) => <MeetingAbout {...params} {...props}/>,
        "/search/:code": (params) => <SearchResult {...params} {...props}/>,
        "/people/:member/:id": (params) => <PersonList {...params} {...props}/>,
        "/election": (params) => <Election {...params} {...props}/>,
        "/person/:id/:path": (params) => <PersonView {...params} {...props}/>,
        "/person/:status": (params) => <PersonView {...params} {...props}/>,
        "/covid19": (params) => <Covid details={true} {...props}/>,
        "/test": (params) => <TestPage {...props}/>,
        "/graph": (params) => <Graph {...props}/>,
        "/fortran": (params) => <Fortran {...props}/>,
        "/conference": (params) => <Conference {...props}/>,
        "/power8": (params) => <Power8 {...props}/>,
        //"/conference/registration": (params) => <ConferenceForm {...props}/>,
        "/conference/:id/:name": (params) => <ConferencePerson {...params} {...props}/>,
    };
}

import React from 'react';
import 'client/style/modal.css';
import {navigate, useRoutes} from "hookrouter";
import routes from "client/Routes";
//import YandexMetrica from "client/components/YandexMetrica";
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'client/components/themes/bootstrap.css';
import ThemeMenuHorizontal from "client/components/themes/top-menu/ThemeMenuHorizontal";
import ThemeAdmin from "client/components/themes/admin/ThemeAdmin";
import siteMap from "client/components/site-map-compiled.json"

export default function LayoutMenuTop(props) {
    const theme = window.location.pathname.match(/^\/admin/) ? 'admin' : 'horizontal';
    const menuItems = [
        //{label: "Начало", path: "/"},
        //{label: "Об Академии", path: "/about"},
        //{label: "Структура", items: siteMap.filter(m => m.pages[0] === 'struktura' && m.pages.length>1).map(m => ({label: m.label, path: '/division' + m.path}))},
        //{label: "ОУС", items: siteMap.filter(m => m.pages[0] === 'obedinyonnye-uchyonye-sovety' && m.pages.length>1).map(m => ({label: m.label, path: '/meeting/' + m.pages[1]}))},

        {
            label: `${(props.authenticatedUser && props.authenticatedUser.displayName)}`, items: [
                {
                    label: 'ADMIN',
                    path: '/admin/news',
                    hidden: !(props.authenticatedUser && props.authenticatedUser.admin)
                },
                {label: 'Кабинет', path: '/cabinet'},
                {label: 'Выход', onClick: props.logOut, hidden: !props.authenticatedUser},
            ], hidden: !props.authenticatedUser
        },
        //{label: 'Конкурс', path: '/concurs/info'},
        {
            label: 'Вход', onClick: () => {
                props.updateReturnUrl(window.location.pathname);
                navigate('/login')
            }, pathX: '/login?xx', hidden: props.authenticatedUser
        },

    ];

    console.log(props.theme)

    let routeResult = useRoutes(routes(props));
    //if(window.location.pathname.match(/^\/admin/)) return <ThemeAdmin menuItems={siteMap.filter(s => s.menu).concat(menuItems)} routeResult={routeResult} {...props}/>
    return <div>
        {/*<ThemeMenuHorizontal menuItems={siteMap.filter(s => s.menu).concat(menuItems)} routeResult={routeResult} {...props}/>*/}
        {theme === 'horizontal' && <ThemeMenuHorizontal menuItems={siteMap.filter(s => s.menu).concat(menuItems)}
                                                        routeResult={routeResult} {...props}/>}
        {theme === 'admin' &&
        <ThemeAdmin menuItems={siteMap.filter(s => s.menu).concat(menuItems)} routeResult={routeResult} {...props}/>}

        {/*<ThemeSwitcher {...props}/>*/}
    </div>
}



import React from "react";
import MenuTop from "client/components/themes/top-menu/MenuTop";
import BottomInfo from "client/pages/home/BottomInfo";
import "client/components/themes/main.sass"
import "client/components/themes/top-menu/theme-horizontal.sass"

export default function ThemeMenuHorizontal(props) {
    return <div className="theme-horizontal">
        <MenuTop {...props} items={props.menuItems}/>
        {/*{window.location.pathname!=='/covid19' && <div><CovidShort {...props}/></div>}*/}
        <div className="container">
            {props.errorPage || props.routeResult}
            <footer>
                {/*<YandexMetrica/>*/}
                <BottomInfo/>
                <div>2020.11.30</div>
            </footer>
        </div>

    </div>
}

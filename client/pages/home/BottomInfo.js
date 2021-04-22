import React from "react";
import Phone from "client/components/Phone";
import Email from "client/components/Email";
import Address from "client/components/Address";
import {A} from "hookrouter"

export default function BottomInfo(props) {
    return <div id="bottom-info">
        <div className="bottom-col">
            <h3>ИНФОРМАЦИЯ</h3>
            <A href="/phone-book">Телефонный справочник</A>
            <A href="/site-map">Карта сайта</A>
            <A href="/partners">Партнёры</A>
        </div>
        <div className="bottom-col">
            <h3>ПОЛЕЗНЫЕ ССЫЛКИ</h3>
            <A href="/about">Об Академии</A>
            <A href="/mass-media">СМИ о нас</A>
            <A href="/science-org">Научные учреждения</A>
            <A href="/gov">Правительство Республики Саха (Якутия)</A>
        </div>
        <div className="bottom-col">
            <h3>КОНТАКТЫ</h3>
            <Phone phone={'+7(4112)33-57-11'}/>
            <Email email={'anrsya@mail.ru'}/>
            <Address
                link="https://2gis.ru/yakutsk/search/%D0%BF%D1%80-%D1%82%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0%2C%2033/firm/7037402698754322?queryState=center%2F129.724604%2C62.024556%2Fzoom%2F18"
                label="677007, г. Якутск, пр-т Ленина, 33"/>

        </div>
    </div>
}

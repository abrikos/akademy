import React, {useState} from "react";
import {Nav} from "react-bootstrap";

export default function AntiCorruption(){
    const [tab, setTab] = useState()
    return <div>
        <h1>Противодействие коррупции</h1>
        <Nav variant="tabs" onSelect={setTab} className="flex-column">
            <Nav.Item>
                <Nav.Link eventKey="sved">СВЕДЕНИЯ о доходах</Nav.Link>
                <Nav.Link href="https://drive.google.com/file/d/1cV7GfX-_Th1CKjraTPvV1towjNocZem1/view?usp=sharing">Об антикоррупционной экспертизе нормативных актов и проектов нормативных актов</Nav.Link>
            </Nav.Item>

        </Nav>

        {tab==='sved' && <div>        <h1>СВЕДЕНИЯ
            о доходах, об имуществе и обязательствах имущественного характера , руководителей Государственного бюджетного учреждения  «Академия наук РС(Якутии)», размещаемые  на официальном сайте ГБУ Академии наук РС(Я) в Порядке, утвержденном Приказом Минтруда России от 07.10.2013г. №530н, за период с 01 января  2020 года по 31 декабря 2020 года.</h1>
        <table className="table table-bordered">
            <tbody>
            <tr valign="top">
                <td rowSpan="2" width="32" ><p align="center">
                    №</p>
                </td>
                <td rowSpan="2" width="80" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >ФИО</font></font></p>
                </td>
                <td rowSpan="2" width="90" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >Должность</font></font></p>
                </td>
                <td rowSpan="2" width="109" ><p align="center" >
                    <font face="Times New Roman, serif"><font size="2" >Общая
                        сумма декларированного годового
                        дохода </font></font>
                </p>
                    <p align="center"><font face="Times New Roman, serif"><font size="2" >(руб.)</font></font></p>
                </td>
                <td colSpan="3" width="232" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >Объекты
                        недвижимого имущества, принадлежащие
                        на праве собственности</font></font></p>
                </td>
                <td colSpan="3" width="232" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >Объекты
                        недвижимости, находящиеся в пользовании</font></font></p>
                </td>
                <td rowSpan="2" width="80" ><p align="center" >
                    <font face="Times New Roman, serif"><font size="2" >Перечень
                        транспортных средств, принадлежащих
                        на праве собственности</font></font></p>
                    <p align="center"><font face="Times New Roman, serif"><font size="2" >(вид,
                        марка)</font></font></p>
                </td>
                <td rowSpan="2" width="77" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >*Сведения
                        об источниках получения средств, за
                        счет которых совершена сделка
                        (вид приобретенного имущества,
                        источники)</font></font></p>
                </td>
            </tr>
            <tr valign="top">
                <td width="71" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >Вид
                        объектов недвижимости</font></font></p>
                </td>
                <td width="81" ><p align="center" >
                    <font face="Times New Roman, serif"><font size="2" >Площадь</font></font></p>
                    <p align="center"><font face="Times New Roman, serif"><font size="2" >(кв.м.)</font></font></p>
                </td>
                <td width="52" ><p align="center" >
                    <font face="Times New Roman, serif"><font size="2" >Страна</font></font></p>
                    <p align="center"><font face="Times New Roman, serif"><font size="2" >расположения</font></font></p>
                </td>
                <td width="90" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >Вид
                        объектов недвижимости</font></font></p>
                </td>
                <td width="62" ><p align="center" >
                    <font face="Times New Roman, serif"><font size="2" >Площадь</font></font></p>
                    <p align="center"><font face="Times New Roman, serif"><font size="2" >(кв.м.)</font></font></p>
                </td>
                <td width="52" ><p align="center" >
                    <font face="Times New Roman, serif"><font size="2" >Страна</font></font></p>
                    <p align="center"><font face="Times New Roman, serif"><font size="2" >расположения</font></font></p>
                </td>
            </tr>
            <tr valign="top">
                <td rowSpan="5" width="32" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >1.</font></font></p>
                </td>
                <td rowSpan="3" width="80" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" ><b>Филиппов
                        Василий Васильевич</b></font></font></p>
                </td>
                <td rowSpan="5" width="90" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >Президент
                        АН РС(Я)</font></font></p>
                </td>
                <td rowSpan="3" width="109" ><p align="center" >
                    <font face="Times New Roman, serif"><font size="2" >Доход
                        по основному месту-</font></font><font face="Times New Roman, serif"><font size="2"
                                                                                                   ><b>2&nbsp;724&nbsp;399,79</b></font></font>
                </p>
                    <p align="center" ><font face="Times New Roman, serif"><font size="2" >Пенсия-
                    </font></font><font face="Times New Roman, serif"><font size="2" ><b>1
                        408 613,76;</b></font></font></p>
                    <p align="center" ><font face="Times New Roman, serif"><font size="2" >Академический
                        оклад- </font></font><font face="Times New Roman, serif"><font size="2" ><b>720&nbsp;000,00</b></font></font></p>
                    <p align="center" ><font face="Times New Roman, serif"><font size="2" >Оклад
                        член-корреспондента РАН- </font></font><font face="Times New Roman, serif"><font size="2" ><b>550&nbsp;000,00</b></font></font>
                    </p>
                    <p align="center" ><br/>

                    </p>
                    <p align="center" ><br/>

                    </p>
                    <p align="center" ><br/>

                    </p>
                    <p align="center"><br/>

                    </p>
                </td>
                <td width="71" ><p align="center">

                </p>
                </td>
                <td width="81" ><p align="center">
                    <br/>

                </p>
                </td>
                <td width="52" ><p align="center">
                    <br/>

                </p>
                </td>
                <td rowSpan="3" width="90" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >-</font></font></p>
                </td>
                <td rowSpan="3" width="62" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >-</font></font></p>
                </td>
                <td rowSpan="3" width="52" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >-</font></font></p>
                </td>
                <td rowSpan="3" width="80" ><p lang="en-US" align="center">
                    <br/>

                </p>
                </td>
                <td rowSpan="3" width="77" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >-</font></font></p>
                </td>
            </tr>
            <tr valign="top">
                <td width="71" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >Гараж(бокс)</font></font></p>
                </td>
                <td width="81" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >20,3</font></font></p>
                </td>
                <td width="52" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >Россия</font></font></p>
                </td>
            </tr>
            <tr valign="top">
                <td width="71" ><p align="center" >
                    <font face="Times New Roman, serif"><font size="2" >Квартира</font></font></p>
                    <p align="center"><font face="Times New Roman, serif"><font size="2" >(общая
                        совместная)</font></font></p>
                </td>
                <td width="81" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >188,7</font></font></p>
                </td>
                <td width="52" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >Россия</font></font></p>
                </td>
            </tr>
            <tr valign="top">
                <td width="80" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >Супруга</font></font></p>
                </td>
                <td width="109" ><p align="center">
                    <br/>

                </p>
                </td>
                <td width="71" ><p align="center" >
                    <font face="Times New Roman, serif"><font size="2" >Квартира</font></font></p>
                    <p align="center"><font face="Times New Roman, serif"><font size="2" >(общая
                        совместная)</font></font></p>
                </td>
                <td width="81" ><p align="center">
                    <br/>

                </p>
                </td>
                <td width="52" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >Россия</font></font></p>
                </td>
                <td width="90" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >-</font></font></p>
                </td>
                <td width="62" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >-</font></font></p>
                </td>
                <td width="52" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >-</font></font></p>
                </td>
                <td width="80" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >-</font></font></p>
                </td>
                <td width="77" ><p align="center">
                    <font face="Times New Roman, serif"><font size="2" >-</font></font></p>
                </td>
            </tr>
            </tbody>
        </table>
        </div>}
    </div>
}

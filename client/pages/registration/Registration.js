import React, {useState} from "react";
import "./registration.sass"
import {Button} from "reactstrap";
import MarkDown from "react-markdown";

const text = `
[Скачайте **"Согласие на обработку данных"**. Заполните. Загрузите с остальными документами.](https://drive.google.com/file/d/13abaDK4y5nMZK72XXIknzIEym7ReAqdz/view?usp=sharing)

[Скачайте **"Учетная карточка"**. Заполните. Загрузите с остальными документами.](https://drive.google.com/file/d/1GgPr57GOvt116WnD8X9bUMHRIFbFNss1/view?usp=sharing)
`

export default function Registration(props) {
    const [submited, setSubmited] = useState();

    function submit(e) {
        e.preventDefault();
        const form = new FormData(e.target)
        //console.log(form.entries())
        props.api('/registration',form)
            .then(()=>setSubmited(true))
    }

    function files(e){
        if(e.target.files.length <2){
            alert('Внимание! Вы выбрали менее 2х файлов!')
        }
    }

    return <div className="registration">

        {submited && <h2 className="alert alert-success text-center">Спасибо! Ваша заявка принята!</h2>}
        {submited || <form onSubmit={submit}>
            <h1>Заявка
                участника межрегиональной конференции
                <br/>«ИНВЕСТИЦИИ В РАННЕЕ ДЕТСТВО - ОСНОВА БУДУЩЕГО»
                <br/>в рамках гражданского межрегионального форума
                <br/>«За будущее России: современные вызовы и консолидация регионов»,
                <br/>посвященного Десятилетию детства в Российской Федерации
                (г. Якутск, 16-22 ноября 2020 г.)</h1>
            <table>
                <tbody>
                <tr>
                    <td colSpan={2} className="text-center bg-info">Информация об участнике</td>
                </tr>
                <tr>
                    <td>ФИО</td>
                    <td><textarea name="fio"/></td>
                </tr>
                <tr>
                    <td>Должность и место работы, учебы, другое</td>
                    <td><textarea name="position"/></td>
                </tr>
                <tr>
                    <td>Ученая степень, звание (при наличии)</td>
                    <td><textarea name="rank"/></td>
                </tr>
                <tr>
                    <td>Контактный телефон и
                        WhatsApp (при наличии)
                    </td>
                    <td><textarea name="phone"/></td>
                </tr>
                <tr>
                    <td>E-mail</td>
                    <td><textarea name="email"/></td>
                </tr>
                <tr>
                    <td colSpan={2} className="text-center bg-info">Информация о форме участия</td>
                </tr>
                <tr>
                    <td>Форма участия: очная или дистанционная (выступление с докладом или участие в дискуссии)</td>
                    <td><textarea name="form"/></td>
                </tr>
                <tr>
                    <td>Название статьи</td>
                    <td><textarea name="articleName"/></td>
                </tr>
                <tr>
                    <td>Наличие презентации</td>
                    <td><input name="isPresentation" type="checkbox" value="Есть"/></td>
                </tr>
                <tr>
                    <td colSpan={2} className="text-center bg-info">Информация участника образовательной программы.
                        Необходимо для выдачи удостоверения повышении квалификации
                    </td>
                </tr>
                <tr>
                    <td>Будете ли Вы принимать участие в образовательной программе</td>
                    <td><input name="isEducProg" type="checkbox" value="Да"/></td>
                </tr>
                <tr>
                    <td>Образование (высшее или среднее специальное)</td>
                    <td><textarea name="education"/></td>
                </tr>
                <tr>
                    <td>Диплом (ВУЗ, специальность, номер диплом, дата выдачи). Прилагаете скан диплом</td>
                    <td><textarea name="diplom"/></td>
                </tr>
                <tr>
                    <td>Паспортные данные (серия и номер, дата выдачи, орган выдавший). Копия паспорта</td>
                    <td><textarea name="passport"/></td>
                </tr>
                <tr>
                    <td>СНИЛС</td>
                    <td><textarea name="snils"/></td>
                </tr>
                <tr>
                    <td>ИНН</td>
                    <td><textarea name="inn"/></td>
                </tr>
                </tbody>
            </table>
            <hr/>
            <MarkDown source={text}/>
            Загрузить документы <input type="file" name={"files"} multiple onChange={files}/>
            <div><strong className="text-danger">Скопируйте все документы в одну папку и загрузите их все за 1 раз (используйте Shift+Click или Ctrl+Click при выборе файлов)</strong></div>
            <hr/>
            <Button>Отправить</Button>
        </form>}

    </div>

}

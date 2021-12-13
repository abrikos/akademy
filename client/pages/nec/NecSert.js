import React, {useEffect, useState} from "react";
export default function NecSert(props){
    const [name, setName] = useState('')
    const [show, setShow] = useState(false)
    function changeHandler({target}){
        setName(target.value)
    }

    function send(){
        props.api('/noc-cert', {name})
            .then(()=>{
                setShow(true)
            })
    }
    return <div className="text-center">
        Для получения сертификата введите ФИО
        <input onChange={changeHandler}/>
        <button onClick={send}>Отправить</button>
        <br/>
        {show && <a href="">Скачать сертификат</a>}
    </div>
}

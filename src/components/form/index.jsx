import './style.css'
import { useState } from 'react';
import { useTranslation } from "react-i18next";



export default function Form({newTitle}){
    const [t, i18n] = useTranslation("global");
    let  [title, setTitle] = useState("")

    function onSubmit(e){
        e.preventDefault(); 
        // console.log(title)


        newTitle(title);
       
      }


    return(
        <form onSubmit = {onSubmit}>
        <input type="text" className="input-search" placeholder={t("user.search")}  autoFocus onChange = {(e) =>setTitle(e.target.value)} />
      </form>  
    )
}
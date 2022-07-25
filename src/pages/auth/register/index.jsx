import './style.css';

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function Register() {


const [t, i18n] = useTranslation("global");
  return (
      <div className='wrap-register'>
      
      <>

    <form className='form-register'>
      <input name="email" type="email" placeholder={t('register.email')} />
      <input name="pass" type="password" placeholder={t("register.pass")} />
      <input name="age" type="number" min={18} placeholder={t("register.age")} />
      <button type="submit">{t("register.btn-register")}</button>
    </form>
    </>
    
    
    </div>
  )
}

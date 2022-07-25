import './style.css'

import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";



function Login(){

    return (
        <div className="wrap-form-login">
        <form className='form-login' >
            <input name="email" type="email" placeholder="Email"></input>
            {/* <input name="pass" type="password" placeholder={`${t('login.pass')}`}></input> */}
            <input name="pass" type="password" placeholder="Password"></input>
            <button type="submit">Login</button>
        </form>
        </div>
    )
}


export default Login;
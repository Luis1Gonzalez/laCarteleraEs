import './style.css';
import { Link } from 'react-router-dom';
// import { useUser } from "../../core/users/user.hook";
import { useTranslation } from "react-i18next";
import { TiArrowBackOutline } from "react-icons/ti";


export default function NavUser(){
    const [t, i18n] = useTranslation("global");
    // const {user} = useUser();
return(
    <div className='wrap-navUser'>

{/* <div className="usuario-reg">{`${t("navUsers.user")}: ${user.email}`}</div>  */}


<div className = 'btn-searchMovies'><Link className="links" to = '/user'>{t("navUsers.searchMovie")}</Link></div>

<div className = 'btn-searchTheaters'><Link className="links" to = '/near'>{t("navUsers.searchTheater")}</Link></div>

<div className='wrap-btn-back' ><Link className="btn-back" to = '/'>{<TiArrowBackOutline />}</Link></div>

    </div>
)
}
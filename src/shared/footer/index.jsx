import './style.css'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';


export default function Footer(){
    const [t, i18n] = useTranslation("global");
    return(
        <div className='wrap-footer'>
            <div className = 'footer-wrap-legales'>

            
            <div className = 'footer-legales notification'><Link className="links" to = '/notification'>{t("footer.legal")}</Link></div>
            <div className = 'footer-legales cookies'><Link className="links" to = '/cookies'>{t("footer.cookies")}</Link></div>
            <div className = 'footer-legales rgpd'><Link className="links" to = '/rgpd'>{t("footer.rgpd")}</Link></div>

            </div>
            <div className = 'footer-copy'><p>Copyright &copy; 2022 Luis A. González R.</p></div>
        </div>
    )
}
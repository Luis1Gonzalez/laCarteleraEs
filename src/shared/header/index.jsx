import "./style.css";
import logo from "./../../images/logo.png";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Header() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="wrap-header">
      <logo className="wrap-logo">
        <img src={logo} alt="logo" />
      </logo>

      <div className="options"> 
<div className="wrap-auth">        
        <div className = 'login'><Link className="links" to = '/auth/login'>{t("header.login")}</Link></div>
        <div className="register"><Link className="links" to = '/auth/register'>{t("header.register")}</Link></div>
      </div>
      </div>


{/* inicio */}

<Navbar className="navbar"   expand="lg">

        <Navbar.Toggle className="navbar" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapse" id="basic-navbar-nav">
          <Nav className="wrap_collapse mx-3">
            <Link className="links" to = '/'>{t("header.home")}</Link>
            <Link className="links" to = '/now'>{t("header.now")}</Link>
            <Link className="links" to = '/premiers'>{t("header.premiers")}</Link>
            <Link className="links" to = '/user'>{t("header.movies")}</Link>
            <Link className="links" to = '/near'>{t("header.theathers")}</Link>
          </Nav>
        </Navbar.Collapse>

    </Navbar>


{/* fin */}
      
    </div>
  );
}

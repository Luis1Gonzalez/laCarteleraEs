import './style.css'
import { Carousel } from 'react-bootstrap'
import caru1 from "./../../images/car1.jpg";
import caru2 from "./../../images/car2.jpg";
import caru3 from "./../../images/car3.jpg";
import caru4 from "./../../images/car4.jpg";
import caru5 from "./../../images/car5.png";
import dispositivo from "./../../images/dispositivo.png";
import like from "./../../images/like.png";
import { useTranslation } from "react-i18next";
import logoISDB from "./../../images/logoISDB.png"
import logoOMDB from "./../../images/logoOMDB.png"
import logoTMDB from "./../../images/logoTMDB.png"




export default function Home(){
  const [t, i18n] = useTranslation("global");


    return(
        <div className='wrap-home'>

<div className="wrap-carousel">
<Carousel>
  <Carousel.Item>
    <img
      className=" imagen d-block w-100"
      src={caru1}
      alt="imagen carrusel 1"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className=" imagen d-block w-100"
      src={caru2}
      alt="imagen carrusel 2"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className=" imagen d-block w-100"
      src={caru3}
      alt="imagen carrusel 3"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className=" imagen d-block w-100"
      src={caru4}
      alt="imagen carrusel 4"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className=" imagen d-block w-100"
      src={caru5}
      alt="imagen carrusel 5"
    />
  </Carousel.Item>

</Carousel>
</div>

<div className="wrap-self">

<div className="self-descriptions self-now">
  <h5>{t("home.now")}</h5>
  <img src={dispositivo} alt="foto de varios dispositivos" />

</div>

<div className="self-descriptions self-topten">
<img src={like} alt="imagen de like" />
  <h5>{t("home.top")}</h5>
  </div>

<div className="self-descriptions self-registered">
  <h5>{t("home.resgister")}</h5>
<ul>
  <li>{t("home.liUno")}</li>
  <li>{t("home.liDos")}</li>
</ul>
</div>

</div>

<div className='wrap-logoDB'>
  <div className="logoDB">
  <img src={logoISDB} alt='Logo de International ShowTimes API' />
  </div>
  <div className="logoDB">
  <img src={logoOMDB} alt='Logo de OMDB API' />
  </div>
  <div className="logoDB">
  <img src={logoTMDB} alt='Logo de TMDB API' />
  </div>
</div>

        </div>
    )
}

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
import { useEffect, useState } from 'react';




export default function Home(){
  const [t, i18n] = useTranslation("global");

  const [movie, setMovie] = useState({})






useEffect(()=> {
  fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_year=2022&sort_by=vote_average.desc&api_key=${process.env.REACT_APP_API_kEY_TMDB_ONLY}&language=es`)
  .then((response) => {
    return response.json();
  })

  .then((m) => {
    setMovie(m)
    //  console.log(m)
  })

.catch((error) => {
console.log(error);
});
  
  },[])





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
  <p>{t("home.now")}</p>
  <img src={dispositivo} alt="foto de varios dispositivos" />

</div>

<div className="self-descriptions self-topten">
<img src={like} alt="imagen de like" />
  <p>{t("home.top")}</p>
  </div>

<div className="self-descriptions self-registered">
  <p>{t("home.register")}</p>
<ul>
  <li>{t("home.liUno")}</li>
  <li>{t("home.liDos")}</li>
</ul>
</div>

</div>

<h4 className='title_wrap_rated'>Lo mas Popular según TMDB</h4>
<div className="wrap_rated">  
{movie.results?.map((c) => (
<div className='card_rated' key={c.id}>
  <div className='poster-rated'>
  <img src={`https://image.tmdb.org/t/p/w500/${c.poster_path}`} alt={`poster de ${c.title}`} />
  </div>  
</div>
))}

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

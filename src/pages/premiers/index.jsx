import './style.css'
import { Carousel } from 'react-bootstrap'
import caru1 from "./../../images/car1.jpg";
import caru2 from "./../../images/car2.jpg";
import caru3 from "./../../images/car3.jpg";
import caru4 from "./../../images/car4.jpg";
import caru5 from "./../../images/car5.png";
import { useEffect } from 'react';
import { useState } from 'react';
// import { AiFillLike } from 'react-icons/ai'
import { useTranslation } from "react-i18next";


export default function Premiers(){

    const [movie, setMovie] = useState({});

    const [t, i18n] = useTranslation("global");

    useEffect(()=> {
        // fetch(`https://api.internationalshowtimes.com/v4/movies?apikey=${process.env.REACT_APP_API_KEY_ISDB}&include_upcomings=true&countries=ES&city=madrid&release_date_from={31-07-2022}`)
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=279a6209c3a88953123109103b1416fd&language=es-Es`)

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

<div className='wrap-premiers'>

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

{/* ============================ */}

<div className='title-now'>{t("premiers.premiers")}</div>

<div className="wrap-grid">

{movie.results?.map((c) => (
<div className='card-prev' key={c.id}>
  <div className='poster'>
    <img src={c.poster_path ? `https://image.tmdb.org/t/p/original${c.poster_path}` : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dCO_yi0ryq5_JUv7fMtqQQHaEK%26pid%3DApi&f=1' } alt={`poster de ${c.original_title}`} />
  </div>
  {/* <div className='description'> */}
{/* <h3>{c.original_title ? c.original_title : 'Titulo no Encontrado'}</h3> */}
{/* </div> */}

</div>
))}


</div>

</div>

</div>


        
    )
}
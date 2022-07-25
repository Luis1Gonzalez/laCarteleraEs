import './style.css'
import { Carousel } from 'react-bootstrap'
import caru1 from "./../../images/car1.jpg";
import caru2 from "./../../images/car2.jpg";
import caru3 from "./../../images/car3.jpg";
import caru4 from "./../../images/car4.jpg";
import caru5 from "./../../images/car5.png";
import { useEffect } from 'react';
import { useState } from 'react';
import { AiFillLike } from 'react-icons/ai'
import { useTranslation } from "react-i18next";



export default function Now(){

    const [movie, setMovie] = useState({});

    const [t, i18n] = useTranslation("global");

    useEffect(()=> {
        fetch(`${process.env.REACT_APP_API_kEY_TMDB}`)
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
      
    // console.log(movie);

    return(

<div className='wrap-nowInTheather'>

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

<div className='title-now'>{t("inTheaters.now")}</div>

<div className="wrap-grid">

{movie.results?.map((c) => (
<div className='card' key={c.id}>
  <div className='poster-now'>
  <img src={`https://image.tmdb.org/t/p/w500/${c.poster_path}`} alt={`poster de ${c.title}`} />
  </div>
  <div className='description'>
<h3>{c.title}</h3>
<div className='wrap-ranking'>
<h5 className='ranking-average'>{c.vote_average}</h5>
<h5 className='ranking-votes'>{`${c.vote_count}`}</h5>
<div className='bilike'>{<AiFillLike />}</div> 
</div>
</div>
</div>
))}


</div>

</div>

</div>


        
    )
}
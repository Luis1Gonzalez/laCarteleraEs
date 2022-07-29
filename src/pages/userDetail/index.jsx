import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStepBackward } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { AiTwotoneHeart } from "react-icons/ai";


const UserMovieDetail = () => {
  // const { user } = useUser();
  // const token =sessionStorage.getItem('auth_token')
  const [t, i18n] = useTranslation("global");
  const { tittle } = useParams();
  const [movie, setMovie] = useState({});

  // https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_kEY_TMDB_ONLY}&language=es-ES&query=${tittle}
  // http://api.themoviedb.org/3/movie/${movie_id}?api_key=279a6209c3a88953123109103b1416fd

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${tittle}?api_key=279a6209c3a88953123109103b1416fd&language=es-ES`)

      .then((r) => r.json())
      .then((f) => setMovie(f));
  }, [tittle]);

console.log(movie.original_title)
  return (
    <div className="wrap-details">
        <div className="wrap-film">

      <div className="wrap-poster">
        <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dCO_yi0ryq5_JUv7fMtqQQHaEK%26pid%3DApi&f=1'} alt={`poster de ${movie.title}`} />
      </div>

     
      <div className="wrap-description">
        <h1>{movie.original_title}</h1>
        {/* <p>{`${t('details.genre')}: ${film.Genre}`}</p> */}
        <p>{`${t('details.year')}: ${movie.release_date}`}</p>
        {/* <p>{`${t('details.country')}: ${film.Country}`}</p>
        <p>{`Director: ${film.Director}`}</p>
        <p>{`${t('details.writer')}: ${film.Writer}`}</p>
        <p>{`${t('details.actors')}: ${film.Actors}`}</p>
        <p>{`${t('details.budget')}: ${film.BoxOffice}`}</p>        
        <p>{`${t('details.time')}: ${film.Runtime}`}</p>   */}
        <p>{`${t('details.awards')}: ${movie.overview}`}</p>     
      </div>


      </div>
    </div>
  );
};

export default UserMovieDetail;

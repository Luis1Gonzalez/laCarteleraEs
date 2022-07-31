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
  const [trailer, setTrailer] = useState({});
  let idioma=""

  // https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_kEY_TMDB_ONLY}&language=es-ES&query=${tittle}
  // http://api.themoviedb.org/3/movie/${movie_id}?api_key=279a6209c3a88953123109103b1416fd

  function defineLanguage(){
    if (i18n.language === 'es'){
    idioma = 'es-Es'
    }else {
      idioma = 'en-Us'
    }
    }
    defineLanguage()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${tittle}?api_key=${process.env.REACT_APP_API_kEY_TMDB_ONLY}&language=${idioma}`)
      .then((r) => r.json())
      .then((f) => setMovie(f));
  }, [tittle,idioma]);

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${tittle}/videos?api_key=${process.env.REACT_APP_API_kEY_TMDB_ONLY}&append_to_response=videos`)
    .then((n) => n.json())
          .then((t) => setTrailer(t));
  },[tittle])

console.log(idioma)
  return (
    <div className="wrap-details">
        <div className="wrap-film">

      <div className="wrap-poster">
        <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dCO_yi0ryq5_JUv7fMtqQQHaEK%26pid%3DApi&f=1'} alt={`poster de ${movie.title}`} />
      </div>

     
      <div className="wrap-description">
        <h1>{movie.original_title}</h1>

        <div className="wrap_genres">{t("details.genre")}:
          {movie.genres?.map((g) => (
            <div className="genres" key ={g.id}>
              <p>{` ${g.name}    `}</p>
            </div>
          ))}
        </div>

        <p>{`${t('details.premiere')}:  ${movie.release_date}`}</p>


         <div className="wrap_producers">{t("details.producedBy")}: 
          {movie.production_companies?.map((p) => (
            <div className="producers"  key={p.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${p.logo_path}`} alt={`logo de la compañia productora ${p.name}`} />
            </div>
          ))}
         </div>

        <div className="wrap_countries">{t("details.producedIn")}:
          {movie.production_countries?.map((c) => (
            <div className="countries" key={c.id}>
              <p>{c.name}</p>
            </div>
          ))}
        </div>

        <p>{`${t('details.budget')}: $${movie.budget}`}</p>
        <p>{`${t('details.revenue')}: $${movie.revenue}`}</p>     
        <p>{`${t('details.time')}: ${movie.runtime} min.`}</p>   
        <p>{`${t('details.tagline')}: ${movie.tagline}`}</p>     
        <p>{`${t('details.overview')}:  ${movie.overview}`}</p>



        <div className="wrap_trailers">Trailers:
        {trailer.results?.map((v) => (
          <div className="trailers" key={v.id}>
          <a href={`https://www.youtube.com/watch?v=${v.key}`} target="_blank" rel="noreferrer">{v.name}</a>
          </div>
        ))}
      
      </div>


      </div>

      


      </div>
    </div>
  );
};

export default UserMovieDetail;

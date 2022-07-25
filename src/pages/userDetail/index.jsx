import { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { FaStepBackward } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { AiTwotoneHeart } from "react-icons/ai";
// import { useUser } from "./../../core/users/user.hook";

const UserMovieDetail = () => {
  // const { user } = useUser();
  // const token =sessionStorage.getItem('auth_token')
  const [t, i18n] = useTranslation("global");
  const { title } = useParams();
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?plot=full&apikey=${process.env.REACT_APP_API_KEY_OMDB}&t=${title}`)
      .then((r) => r.json())
      .then((f) => setFilm(f));
  }, [title]);

  // console.log(user);

  return (
    <div className="wrap-details">
        <div className="wrap-film">



      <div className="wrap-poster">
        <img src={film.Poster ? film.Poster : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dCO_yi0ryq5_JUv7fMtqQQHaEK%26pid%3DApi&f=1'} alt={`poster de ${film.Title}`} />
      </div>
      <div className="wrap-description">
        <h1>{film.Title}</h1>
        <p>{`${t('details.genre')}: ${film.Genre}`}</p>
        <p>{`${t('details.year')}: ${film.Year}`}</p>
        <p>{`${t('details.country')}: ${film.Country}`}</p>
        <p>{`Director: ${film.Director}`}</p>
        <p>{`${t('details.writer')}: ${film.Writer}`}</p>
        <p>{`${t('details.actors')}: ${film.Actors}`}</p>
        <p>{`${t('details.budget')}: ${film.BoxOffice}`}</p>        
        <p>{`${t('details.time')}: ${film.Runtime}`}</p>   
        <p>{`${t('details.awards')}: ${film.Awards}`}</p>    
      </div>
     
    </div>
    <div className="back"><Link className="links" to = '/user'>{<FaStepBackward />}{t("userDetail.userDetail")}</Link></div>
    
    </div>
  );
};

export default UserMovieDetail;

import "./style.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Form from "../../components/form";
import { changeLanguage } from "i18next";



  

export default function User(){
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();
  const [films, setFilms] = useState({});
  let [title,setTitle] = useState("")
  
  let idioma = ""

  
  let tittle=""
if (title === ""){
  tittle='hulk'
}else{
  tittle=title
}

const getTitle = async (title) => {
  setTitle(title)
}    

function defineLanguage(){
if (i18n.language === 'es'){
idioma = 'es-Es'
}else {
  idioma = 'en-Us'
}
}
defineLanguage()


    useEffect(() =>{ 
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_kEY_TMDB_ONLY}&language=${idioma}&query=${tittle}`)
  .then((r =>r.json()))
  .then(f => setFilms(f))
    },[tittle, idioma])
    

  return(

<div classname="grand-user ">

  <div className="wrap-movieSearch">
    <div className="wrap-input">

          <Form newTitle = {getTitle}/>
         

         <div className="card-search">
          {films?.results?.map((f) => (
            <div className="film-card" key={f.id} onClick = {() => navigate(`/film/${f.id}`)} >
              
              <div className="film_card_wrap_img">              
                <img src={f.poster_path ? `https://image.tmdb.org/t/p/w500/${f.poster_path}` : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dCO_yi0ryq5_JUv7fMtqQQHaEK%26pid%3DApi&f=1' } alt={`poster de ${f.title}`} />
              </div>
              <p>{f.title}</p>
              <p>{f.release_date}</p>
            </div>
          )
          )
          }
    </div> 
  </div>
</div>
</div>
    
  )
};








































// import "./style.css";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { Link } from 'react-router-dom';



// const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY_OMDB}&type=movie`;

// const User = () => {
//   const [t, i18n] = useTranslation("global");

// // const getTokenUser = sessionStorage.getItem('auth_token')

//   const navigate = useNavigate();

//   const [state, setState] = useState({
//     data: [],
//     loading: true,
//     searchTerm: "",
//     error: "",
//   });

//   const getMovie = async () => {
//     // search
//     const res = await fetch(`${API}&s=batman`);
//     const resJSON = await res.json();

//     if (resJSON) {
//       setState({
//         data: resJSON.Search,
//         loading: false,
//         error: "",
//       });
//     }
//   };

//   useEffect(() => {
//     // const res = await fetch("../../assets/data.json");
//     getMovie();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (state.searchTerm === "") {
//       return setState({ ...state, error: "Please write a valid text" });
//     }

//     const response = await fetch(`${API}&s=${state.searchTerm}`);
//     const data = await response.json();

//     if (!data.Search) {
//       return setState({ ...state, error: "There are no results." });
//     }

//     return setState({
//       data: data.Search,
//       searchTerm: "",
//       error: "",
//     });
//   };

//   const { data, loading } = state;

//   if (loading) {
//     return <div>Loading...</div>;
//   }
  

//   return (
//     <div classname="grand-user ">

      // <div className="wrap-movieSearch">
      //   <div className="wrap-input">
      //     <form className="wrap-search" onSubmit={handleSubmit}>
      //       <input
      //         type="text"
      //         className="input-search"
      //         placeholder={t("user.search")}
      //         onChange={(e) =>
      //           setState({ ...state, searchTerm: e.target.value })
      //         }
      //         value={state.searchTerm}
      //         autoFocus
      //       />
      //     </form>
      //     <p className="text-error">{state.error ? `${t("user.result")}` : ""}</p>
      //   </div>

      //   <div className="card-search">
      //     {data?.map((f) => (
      //       <div
      //         className="film-card"
      //         key={f.imdbID}
      //         onClick={() => navigate(`/user/${f.Title}`)}
      //       >
      //         {/* {console.log(f)} */}
      //         <div>              
      //           <img src={f.Poster ? f.Poster : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dCO_yi0ryq5_JUv7fMtqQQHaEK%26pid%3DApi&f=1' } alt={`poster de ${f.Title}`} />
      //         </div>
      //         <h2>{f.Title}</h2>
      //       </div>
      //     ))}

//         </div>


//       </div>
//     </div>
//   );
// };

// export default User;

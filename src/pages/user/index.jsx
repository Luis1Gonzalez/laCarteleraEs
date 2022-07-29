import "./style.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Form from "../../components/form";



  

export default function User(){
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();
  const [film, setFilm] = useState({});
  let [title,setTitle] = useState("")
  

  // let urlOriginal = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY_OMDB}&type=movie`
  let tittle=""
if (title === ""){
  tittle='hulk'
}else{
  tittle=title
}

const getTitle = async (title) => {
  setTitle(title)
}    

    useEffect(() =>{ 
  fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY_OMDB}&type=movie&s=${tittle}`)
  .then((r =>r.json()))
  .then(f => setFilm(f))
    },[tittle])

  return(

<div classname="grand-user ">

  <div className="wrap-movieSearch">
    <div className="wrap-input">

          <Form newTitle = {getTitle}/>
         

         <div className="card-search">
          {film.Search?.map((f) => (
            <div className="film-card" key={f.imdbID} onClick = {() => navigate(`/film/${f.Title}`)} >
              <h1>{f.Title}</h1>
              
              <div>              
                <img src={f.Poster ? f.Poster : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dCO_yi0ryq5_JUv7fMtqQQHaEK%26pid%3DApi&f=1' } alt={`poster de ${f.Title}`} />
              </div>
              <h2>{f.Title}</h2>
              <h3>{f.Year}</h3>
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

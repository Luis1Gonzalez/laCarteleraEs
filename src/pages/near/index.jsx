import './style.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import NavUser from '../../shared/navUsers';

export default function Near(){
 
    const [t, i18n] = useTranslation("global");
    const [theater, settheater] = useState({});



    useEffect(()=> {

        if (navigator.geolocation){
 
            navigator.geolocation.getCurrentPosition(showPosition);
            
            }
         else {
            // alert="<p>Lo sentimos, tu dispositivo no admite la geolocaización.</p>";
            console.log('no va la localización')
            }
    
            function showPosition(position){
                const lng = position.coords.longitude
                const lat = position.coords.latitude
                const coord = (`${lat},${lng}`)
                console.log(coord)
                fetch(`https://api.internationalshowtimes.com/v4/cinemas/?location=${coord}&distance=30&apikey=${process.env.REACT_APP_API_KEY_ISDB}`)
                .then((response) => {
                  return response.json();
                })
            
                .then((m) => {
                  settheater(m)
                  //  console.log(m)
                })
            
            .catch((error) => {
              console.log(error);
            });


            }

        
        
        },[])
      
    ;
   

    return(
        <div className='grands'>

<NavUser />
    
    {
        theater.cinemas?.map((t) => (
<div className="card-theater" key = {t.id}>
    <h3>{t.name}</h3>
    <span>Telefono:</span>
    <p>{t.telephone}</p>
    <span>Dirección:</span>
    <p>{t.location.address.display_text}</p>
    <a href={t.website}>{`Webside: ${t.name}`}</a>
</div>
        ))
    }

{/* <Geo /> */}

</div>


    )
}
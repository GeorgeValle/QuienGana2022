import GroupCountries from "../components/GroupCountries";
import {useState}from'react';
import Daleb from "../components/Daleb.js";




const GroupListContainer=()=>{
    const [loader, setLoader]=useState(false);
    const arg ="https://res.cloudinary.com/georgevalle/image/upload/v1667714950/pickemp/banderas/64px/arg-64_gslldc.png"
    const listCountries= [
        {name:"Qatar",image:arg,group:"A"},
        {name:"Ecuador",image:arg,group:"A"},
        {name:"Senegal",image:arg,group:"A"},
        {name:"Países Bajos",image:arg,group:"A"},
        {name:"Inglaterra",image:arg,group:"B"},
        {name:"Irán",image:arg,group:"B"},
        {name:"Estados Unidos",image:arg,group:"B"},
        {name:"Gales",image:arg,group:"B"},
        {name:"Argentina",image:arg,group:"C"},
        {name:"Arabia Saudita",image:"",group:"c"},
        {name:"Méjico",image:arg,group:"C"},
        {name:"Polonia",image:arg,group:"C"},
        {name:"Francia",image:arg,group:"D"},
        {name:"Australia",image:arg,group:"D"},
        {name:"Dinamarca",image:arg,group:"D"},
        {name:"Túnez",image:arg,group:"D"},
        {name:"España",image:arg,group:"E"},
        {name:"Costa Rica",image:arg,group:"E"},
        {name:"Alemania",image:arg,group:"E"},
        {name:"Japón",image:arg,group:"E"},
        {name:"Bélgica",image:arg,group:"F"},
        {name:"Canadá",image:arg,group:"F"},
        {name:"Marruecos",image:arg,group:"F"},
        {name:"Croacia",image:arg,group:"F"},
        {name:"Brasil",image:arg,group:"G"},
        {name:"Serbia",image:arg,group:"G"},
        {name:"Suiza",image:arg,group:"G"},
        {name:"Camerún",image:arg,group:"G"},
        {name:"Portugal",image:arg,group:"H"},
        {name:"Ghana",image:arg,group:"H"},
        {name:"Uruguay",image:arg,group:"H"},
        {name:"Corea del Sur",image:arg,group:"H"}
    ]

    setTimeout(setLoader(true), 2500);
    return (
        <>
        {loader
            ?<Daleb className="daleb"></Daleb>
            :<GroupCountries listCountries={listCountries}/>}
        </>
    );
}

export default GroupListContainer;
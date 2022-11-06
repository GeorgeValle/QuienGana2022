
import  "../css/styles.css";
import React from 'react';


const itemCountry =({country}) =>{
const {name,image}=country;
    return(
        <div className="country-group">
            <img src={image} alt={name} className="country-image"></img>
            <h3 className="country-name">{name}</h3>
        </div>
    )
}

export default itemCountry;
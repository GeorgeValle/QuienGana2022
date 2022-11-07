import 'bootstrap/dist/css/bootstrap.min.css';
import Country from './ItemCountry'

import "../css/styles.css";


const groupCountries =({listCountries}) =>{

    return(
        <div className="card">
            <h5 class="card-title">{`Grupo ${listCountries.group}`}</h5>
            <div>
            {listCountries.map((country) =><Country name={country.name} image={country.image} />)};
            </div>
            <div>
                <button className="button-country">¡Elige los resultados!</button>
            </div>
        </div>
    )
}

export default groupCountries;
import "../css/styles.css";
import { Link } from 'react-router-dom';

const NavBar= ()=>{

    return (
        <div>
            Navbar test
            <Link to="/grupos" 
                    style={{color: "black"}}
                    className="text-decoration-none"
            >
                    Grupos
            </Link>
        </div>
    )
}

export default NavBar;
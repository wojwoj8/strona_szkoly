import React from "react";
import '../../App.css';
import { Link } from 'react-router-dom';

function Nav(){

    return(
        <div className="nav-container">
            <header>
                <img alt="Obrazek1" id="godlo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Coat_of_arms_of_Poland-official.svg/800px-Coat_of_arms_of_Poland-official.svg.png"/>
                <div className="title">
                    <h1>Szkoła Podstawowa</h1>
                    <h1>im. Orląt Lwowskich w Nowinach </h1>
                </div>
                <img alt="Obrazek2" id="godlo-szkoly" src="http://www.spnowiny.nazwa.pl/images/xlogsz3.png.pagespeed.ic.dPLGvPe7MM.webp"/>
            </header>
            
                <nav>
                    <div className="nav-butt">
                        <Link to="/"><button>Strona główna</button></Link>
                        <button><Link to="/szkola">Szkoła</Link></button>
                        <button><Link to="/strefa_ucznia">Strefa ucznia</Link></button>
                        <button><Link to="/dokumenty">Dokumenty</Link></button>
                        <button><Link to="/kontakt">Kontakt</Link></button>
                        <button><Link to="/plan_zajec">Plan zajęć</Link></button>
                    </div>
                </nav>
            </div>
            
        
    )

}

export default Nav;
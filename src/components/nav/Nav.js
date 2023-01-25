import React from "react";
import './Nav.css';
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
            <div className="nav-list">
                <nav>
                    <ul>
                        <li><Link to="/">Strona główna</Link></li>
                        <li><Link to="/szkola">Szkoła</Link></li>
                        <li><Link to="/strefa_ucznia">Strefa ucznia</Link></li>
                        <li><Link to="/dokumenty">Dokumenty</Link></li>
                        <li><Link to="/kontakt">Kontakt</Link></li>
                        <li><Link to="/plan_zajec">Plan zajęć</Link></li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )

}

export default Nav;
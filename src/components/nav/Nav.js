import React from "react";
import './Nav.css';
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
                        <li><a href="/">Strona główna</a></li>
                        <li><a href="/szkola">Szkoła</a></li>
                        <li><a href="/strefa_ucznia">Strefa ucznia</a></li>
                        <li><a href="/dokumenty">Dokumenty</a></li>
                        <li><a href="/kontakty">Kontakt</a></li>
                        <li><a href="/plan_zajec">Plan zajęć</a></li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )

}

export default Nav;
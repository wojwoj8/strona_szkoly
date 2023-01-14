import React from "react";
import './Nav.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
function Nav(){



    return(
        <div class="nav-container">
            <header>
                <img alt="Obrazek1" id="godlo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Coat_of_arms_of_Poland-official.svg/800px-Coat_of_arms_of_Poland-official.svg.png"/>
                <div class="title">
                    <h1>Szkoła Podstawowa</h1>
                    <h1>im. Orląt Lwowskich w Nowinach </h1>
                </div>
                <img alt="Obrazek2" id="godlo-szkoly" src="http://www.spnowiny.nazwa.pl/images/xlogsz3.png.pagespeed.ic.dPLGvPe7MM.webp"/>
            </header>
            <div class="nav-list">
                <nav>
                    <ul>
                        <li>Szkoła</li>
                        <li>Strefa ucznia</li>
                        <li>Dokumenty</li>
                        <li>Kontakt</li>
                        <li>Plan zajęć</li>
                    </ul>
                </nav>
            </div>
            <Main/>
            <Footer/>
        </div>
    )

}

export default Nav;
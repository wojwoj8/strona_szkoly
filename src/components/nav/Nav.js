import React from "react";
import './Nav.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
function Nav(){



    return(
        <div>
            <header>
                <img alt="Obrazek1"/>
                <h1>Szkoła Podstawowa im. Orląt Lwowskich w Nowinach </h1>
                <img alt="Obrazek2"/>
            </header>
            <nav>
                <ul>
                    <li>Szkoła</li>
                    <li>Strefa ucznia</li>
                    <li>Dokumenty</li>
                    <li>Kontakt</li>
                    <li>Plan zajęć</li>
                </ul>
            </nav>
            <Main/>
            <Footer/>
        </div>
    )

}

export default Nav;
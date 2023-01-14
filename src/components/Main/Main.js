import React from "react";
import './Main.css';
import './img1.bmp';

function Main(){

    return(
        <div class="main-container"> 
        {/* https://cdn.pixabay.com/photo/2017/09/26/04/28/classroom-2787754_960_720.jpg */}
            <div class="obrazki">
                <img alt="Obrazek3" id="obrazki-main" src="https://cdn.pixabay.com/photo/2017/09/26/04/28/classroom-2787754_960_720.jpg"/>
            </div>
            <h3>Aktualności</h3>
            <div class="akt">
                <div class="grid-cont">
                    <div class="grid-elem">
                        <div class="left">
                           <img src="img1.bmp" alt="akt_tmp"/>
                        </div>
                        <div class="text_date">
                            <div class="data-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"/> </g> </svg>
                                <span>13.01.23</span>
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed iaculis ac massa sed euismod. Nunc fringilla, augue a 
                            rutrum cursus, leo nisi varius sapien, nec ornare purus neque 
                            vitae leo. Nunc ipsum enim, mollis sit amet libero id, tristique 
                            egestas quam. Aenean in posuere urna, in commodo ipsum. Donec vitae 
                            egestas est. Fusce dignissim aliquet felis ut vestibulum. Mauris 
                            molestie gravida velit, a fringilla tortor cursus id. Donec eget mollis 
                            nibh, ut commodo nulla.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Main;
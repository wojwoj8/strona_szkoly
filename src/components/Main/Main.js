import React from "react";
import '../../App.css';
// import image from './img1.bmp';

function Main(){

    const defaultData = [
        {
            date: "13.01.23",
            picture: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1600",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis ac massa sed euismod. Nunc fringilla, augue a rutrum cursus, leo nisi varius sapien, nec ornare purus neque vitae leo. Nunc ipsum enim, mollis sit amet libero id, tristique egestas quam. Aenean in posuere urna, in commodo ipsum. Donec vitae egestas est. Fusce dignissim aliquet felis ut vestibulum. Mauris molestie gravida velit, a fringilla tortor cursus id. Donec eget mollis nibh, ut commodo nulla.",
        },
        {
            date: "08.01.23",
            picture: "https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis ac massa sed euismod. Nunc fringilla, augue a rutrum cursus, leo nisi varius sapien, nec ornare purus neque vitae leo. Nunc ipsum enim, mollis sit amet libero id, tristique egestas quam. Aenean in posuere urna, in commodo ipsum. Donec vitae egestas est. Fusce dignissim aliquet felis ut vestibulum. Mauris molestie gravida velit, a fringilla tortor cursus id. Donec eget mollis nibh, ut commodo nulla.",
        },
        {
            date: "03.01.23",
            picture: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis ac massa sed euismod. Nunc fringilla, augue a rutrum cursus, leo nisi varius sapien, nec ornare purus neque vitae leo. Nunc ipsum enim, mollis sit amet libero id, tristique egestas quam. Aenean in posuere urna, in commodo ipsum. Donec vitae egestas est. Fusce dignissim aliquet felis ut vestibulum. Mauris molestie gravida velit, a fringilla tortor cursus id. Donec eget mollis nibh, ut commodo nulla.",
        },
        {
            date: "01.01.23",
            picture: "https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis ac massa sed euismod. Nunc fringilla, augue a rutrum cursus, leo nisi varius sapien, nec ornare purus neque vitae leo. Nunc ipsum enim, mollis sit amet libero id, tristique egestas quam. Aenean in posuere urna, in commodo ipsum. Donec vitae egestas est. Fusce dignissim aliquet felis ut vestibulum. Mauris molestie gravida velit, a fringilla tortor cursus id. Donec eget mollis nibh, ut commodo nulla.",
        },

    ]

    const RenderContent = () =>{

        return(
            defaultData.map(data =>(
                <div className="grid-elem" key={data.date}>
                    
                        <div className="left">
                            <img src={data.picture} alt="akt_tmp"/>
                        </div>
                        <div className="text_date">
                            <div className="data-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"/> </g> </svg>
                                <span>{data.date}</span>
                            </div>
                            <p>
                                {data.text}
                            </p>
                        </div>
                    </div>
            ))
        )
    }

    return(
        <div className="main-container"> 
        {/* https://cdn.pixabay.com/photo/2017/09/26/04/28/classroom-2787754_960_720.jpg */}
            <div className="obrazki">
                <img alt="Obrazek3" id="obrazki-main" src="https://cdn.pixabay.com/photo/2017/09/26/04/28/classroom-2787754_960_720.jpg"/>
            </div>
            
            <div className="akt">
                <div className="grid-cont">
                    <h2>Aktualności</h2>
                    <hr></hr>
                    <RenderContent/>
                </div>
            </div>
        </div>

    )

}

export default Main;
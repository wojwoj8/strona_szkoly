import React from "react";
import '../../App.css';
import { Link } from 'react-router-dom';
import defaultData from "../Data";
// import { Route, Routes } from 'react-router-dom';
// import image from './img1.bmp';

function Main(){

    const RenderContent = () =>{

        return(
            defaultData.map(data =>{
                let link;
                if(data.index%2 === 0)
                {
                    link = "/artice/"+data.index;
                    return(
                    
                        <div className="grid-elem" key={data.index}>
                        
                            <div className="left">
                                <img src={data.picture} alt="akt_tmp"/>
                            </div>
                            <Link to={link} >
                                <div className="text_date">
                                    <div className="data-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"/> </g> </svg>
                                        <span>{data.date}</span>
                                    </div>
                                    <p>
                                        {data.text}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    
                )}
                
                else
                {
                    link = "/artice/no/"+data.index;
                    return(
                        <div className="grid-elem" key={data.index}>
                            <div className="left">
                                <img src={data.picture} alt="akt_tmp"/>
                            </div>
                            <Link to={link} >
                                <div className="text_date">
                                    <div className="data-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"/> </g> </svg>
                                        <span>{data.date}</span>
                                    </div>
                                    <p>
                                        {data.text}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    
                    )
                }
                
            })
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
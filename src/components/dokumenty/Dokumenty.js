import React from "react";
// import './Nav.css';
import defaultData from "./defaultData";


function Dokumenty(){

    const Content = () =>{
        return(
            defaultData.map(data => (
                <div className="doc-elem" key={data.index}>
                    <p>{data.opis}: <a href={data.link}>link</a></p>
                </div>
            ))
        )
    }    

    return(
        <>
        <div className='akt'>
            <div className='grid-cont szkol-text'>
                <h1>Dokumenty</h1>
                <hr></hr>
                <div className="dok-but">
                    <button>Dla Rodziców</button>
                    <button>Dla Personelu</button>
                    <button>Dla Uczniów</button>
                </div>
                    <hr></hr>
                
                    <div className="doc">
                        <Content/>
                    </div>
            </div>    
        </div>
        </>
    
)

}

export default Dokumenty;
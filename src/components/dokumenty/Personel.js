import React from "react";
import { Link } from "react-router-dom";
// import './Nav.css';
import defaultData from "./defaultData";


function Personel(){

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
                <h1>Dokumenty dla personelu</h1>
                <hr></hr>
                <div className="dok-but">
                    <Link to='/dokumenty'><button>Dla Rodziców</button></Link>
                    <Link to='/dokumenty/personel'><button>Dla Personelu</button></Link>
                    <Link to='/dokumenty/uczniowie'><button>Dla Uczniów</button></Link>
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

export default Personel;
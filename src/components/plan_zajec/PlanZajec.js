import React from "react";
import '../../App.css';

function PlanZajec(){

    return(
        <>
        <div className='akt'>
            <div className='grid-cont plan-text'>
                <h1>Plany Zajęć</h1>
                    <hr></hr>
                
                    <div className="plan">
                        <div className="plan-left">
                            <div className="plan-elem">
                                <ul>
                                    <li><a href="#">Klasa I</a></li>
                                    <li><a href="#">Klasa II</a></li>
                                    <li><a href="#">Klasa III</a></li>
                                    <li><a href="#">Klasa IV</a></li>
                                    <li><a href="#">Klasa V</a></li>
                                    <li><a href="#">Klasa VI</a></li>
                                    <li><a href="#">Klasa VII</a></li>
                                    <li><a href="#">Klasa VIII</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="plan-right">
                            <div className="plan-elem">
                                
                            </div>

                        </div>
                        
                </div>
            </div>    
        </div>
        </>
    )

}

export default PlanZajec;
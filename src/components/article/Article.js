import React from "react";
import '../../App.css';
import { useParams } from 'react-router-dom';
import defaultData from "../Data";

export default function Artice(){

    const { artice } = useParams()
    const title = defaultData[artice-1].title;
    return(
            <>
            <div className='akt'>
            
                <div className='grid-cont szkol-text'>
                <h1>{title}</h1>
                <hr></hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus eget libero quis efficitur. Donec eget auctor lectus, ut sagittis elit. Phasellus in egestas lacus. Aenean laoreet mauris mauris, et tincidunt dui tempor ut. Cras libero tortor, blandit vestibulum magna nec, fermentum fermentum lacus. Sed eu faucibus ex. Etiam dignissim congue leo non imperdiet. Duis sed feugiat urna. Phasellus ante tellus, iaculis quis arcu sed, dignissim lobortis mauris. Sed egestas aliquet purus ac varius. Aenean id interdum tellus, in luctus massa.</p>
                    <p>Duis vitae eros tellus. In orci tellus, facilisis quis malesuada non, pretium vel ipsum. Cras lobortis at risus eget consectetur. Donec convallis leo sed metus blandit, nec eleifend lacus placerat. Integer id magna in odio porta suscipit. Ut tempus vestibulum diam, vitae gravida ante molestie ut. Aliquam sed interdum sem. Quisque eget pulvinar urna, at convallis sapien. In tristique tempor turpis et dignissim. Integer viverra ac neque eget lacinia. Proin molestie ex non porttitor lacinia. Donec quis luctus ante, vel vulputate nisl. Quisque feugiat orci quis lorem pretium, vitae auctor arcu vestibulum. Curabitur nisl ante, sodales a commodo sed, rhoncus a est.</p>
                    <p>Quisque egestas ante quis odio fringilla faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce molestie arcu eu dapibus consequat. Donec eget luctus mi. In blandit semper dignissim. Sed quis nunc et diam placerat sodales sed nec magna. Aenean pellentesque, nisl ac consectetur imperdiet, lectus justo imperdiet turpis, quis congue sapien nibh a augue.</p>
                </div>    
            </div>
            </>
        
    )

}
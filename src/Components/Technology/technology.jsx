import { useState } from 'react'
import '../../assets/css/technology/techStyle.css';
import vehicle from "../../assets/images/technology/image-launch-vehicle-portrait.jpg";
import capsule from "../../assets/images/technology/image-space-capsule-portrait.jpg";
import spaceport from "../../assets/images/technology/image-spaceport-portrait.jpg";
import ImageColumn from '../ImageColumn';
import { data } from './data';
import numButtons from './numButtons';

function Technology() {
    const images = {vehicle, spaceport, capsule}
    const [state, setState] = useState({
        name: data.vehicle.name,
        para: data.vehicle.para,
        img: images.vehicle
    })

    function btnClick(e) {
        const obj = data[e.target.name]
        const name = e.target.name
        setState({
            name: obj.name,
            para: obj.para,
            img: images[name]
        })
    }

    return (
        <div className="container">
            <h2 id="heading"><span id="number">03</span> Space Launch 101</h2>

            <div className="row">
            <div className="col-md-8">
                <div className="row">
                <div className="col-md-2">
                    
                    <numButtons name="vehicle" onClick={btnClick} number="1"/>
                    <numButtons name="capsule" onClick={btnClick} number="2"/>
                    <numButtons name="spaceport" onClick={btnClick} number="3"/>
                    
                </div>

                <div className="col-md-10">
                    <p>The terminology...</p>
                    <p className="name">{state.name}</p>
                    <p className="para">
                    {state.para}
                    </p>
                </div>
                </div>
            </div>

            <div className='col-md-4'>
                <ImageColumn img={state.img} />    
            </div>


            </div>
        </div>  
    )
}

export default Technology

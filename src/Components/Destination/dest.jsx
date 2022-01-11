import { useState } from "react";
import DestTabs from "./destTab";
import Info from "./info";
import '../../assets/css/destination/destStyle.css';
import moon from "../../assets/images/destination/image-moon.png"
import mars from "../../assets/images/destination/image-mars.png"
import europa from "../../assets/images/destination/image-europa.png"
import titan from "../../assets/images/destination/image-titan.png"
import data from './data';
import ImageColumn from "../ImageColumn";
import Text from "../Text";

function Destination() {
    const images = {
        moon, mars, europa, titan
    }

    const [state, setState] = useState({
        name: data["moon"].name,
        detail: data["moon"].detail,
        avgDis: data["moon"].avg_dist,
        travel: data["moon"].travel_time,
        img: images.moon
    })

    function btnClick (e) {
        var name = e.target.name;

        setState({
            name:data[name].name,
            detail: data[name].detail,
            avgDis: data[name].avg_dist,
            travel: data[name].travel_time,
            img: images[name]
        })
        console.log(images[name])
    }

    return (
        <div className="container">
            
            <h2 className="mt-3"><span id="num">01</span> Pick your destination</h2>
            <div className="row mainRow">
            <ImageColumn img={state.img} className="pl-5"/>
            
                <div className="col img">
                    <DestTabs btnClick={btnClick}/>
                    
                    <h1 className="mt-5" id="name">{state.name}</h1>
                    
                    <Text className="detail" text={state.detail}/>

                    <hr className="mt-5" />

                    <div className="row">
                        <Info name="Avg. Distance" value={state.avgDis} />
                        <Info name="Est. travel time" value={state.travel} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Destination;
import { useState } from "react";
import '../../assets/css/crew/crewStyles.css';
import commander from "../../assets/images/crew/image-douglas-hurley.webp"
import specialist from "../../assets/images/crew/image-mark-shuttleworth.webp"
import engineer from "../../assets/images/crew/image-anousheh-ansari.webp"
import pilot from "../../assets/images/crew/image-victor-glover.webp"
import { data } from "./data";
import CircularButtons from "./CircularButtons";
function Crew() {
    const images = {
        commander, pilot,engineer,specialist
    }

    const [state, setState] = useState({
        name: data.commander.name,
        para: data.commander.para,
        career: data.commander.career,
        img: images.commander
    })

    function btnClick(e) {
        const name = e.target.name;
        const obj = data[name]
        setState({
            name: obj.name,
            para: obj.para,
            career: obj.career,
            img: images[name]
        });
    }

    return (
        <div className="container">
            <h2 className="mt-5"><span id="meet">02</span> Meet your crew</h2>
            <div className="row">
                <div className="col">
                    
                    <p id="career">{state.career}</p>
                    <p id="name">{state.name}</p>
                    <p id="para">
                    {state.para}
                    </p>

                    <div className="dotLinks">
                        <CircularButtons name="commander" onClick={btnClick}/>
                        <CircularButtons name="pilot" onClick={btnClick}/>
                        <CircularButtons name="engineer" onClick={btnClick}/>
                        <CircularButtons name="specialist" onClick={btnClick}/>
                    </div>
                </div>
        
                <div className="col img">
                    <img src={state.img} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Crew

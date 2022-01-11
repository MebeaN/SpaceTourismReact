import React from 'react'
import '../../assets/css/home/home.css';
import Text from '../Text';
function home() {
    function btnClick() {
            document.location.href = '/destination'
    }

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <p id="firstLine">So, you want to travel to</p>
                <Text id="space" text="Space"/>
                <Text id="para" text={`Let's face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we'll give you a truly out of this world experience!`} />
            </div>
        
            <div className="btn exploreBtn" onClick={btnClick}>
                EXPLORE
            </div>
        
            </div>
        </div>
    )
}

export default home

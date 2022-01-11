import React from "react";

function Info (props) {
    return (
        <div className="col-md-6">
            <p className="infoTitle">{props.name}</p>
            <p className="info" id="avgDis">{props.value}</p>
        </div>
    )
}

export default Info;
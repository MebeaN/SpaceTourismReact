import React from 'react'

function ImageColumn(props) {
    return (
        <div className="col img">
            <img src={props.img} alt=""/>
        </div>
    )
}

export default ImageColumn

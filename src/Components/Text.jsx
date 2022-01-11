import React from 'react'

function Text(props) {
    return (
        <p className={props.className} id={props.id}>{props.text}</p>
    )
}

export default Text

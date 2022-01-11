import React from 'react'

function CircularButtons(props) {
    return (
        <button class={props.className} name={props.name} onClick={props.onClick}></button>
    )
}

export default CircularButtons;

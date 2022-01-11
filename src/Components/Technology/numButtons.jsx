import React from 'react'

function NumButtons(props) {
    return (
        <button className='tech-btns' name={props.name} onClick={props.onClick}>{props.number}</button>
    )
}

export default NumButtons

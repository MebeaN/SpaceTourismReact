import React from 'react'

function numButtons(props) {
    return (
        <button className='tech-btns' name={props.name} onClick={props.btnClick}>{props.number}</button>
    )
}

export default numButtons

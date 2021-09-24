import React from 'react';
import './InputOptions.css';
const InputOptions = ({Icon, title, colorProp}) => {
    return (
        <div className = "inputOption">
            <Icon style = {{color:colorProp}}/>
            <h4>{title}</h4>
        </div>
    )
}

export default InputOptions

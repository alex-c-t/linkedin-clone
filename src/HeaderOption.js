import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css';


const HeaderOption = ({avatar,Icon, title, onclick}) => {
    const user = useSelector(selectUser);
    return (
        <div onClick = {onclick} className = 'headerOption'>
            {Icon && <Icon className = "headerOption__icon"/>}
            {avatar && (<Avatar className = "headerOption__icon">{user?.email[0]}</Avatar>)}
            <h3 className = "headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption

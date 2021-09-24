import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import HeaderOption from './HeaderOption';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase1';
import { useSelector } from 'react-redux';


const Header = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logOutApp = () => {
        dispatch(logout());
        auth.signOut(); 
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src = "https://www.raulvelazquezphd.com/wp-content/uploads/2017/10/LinkedIn-1.png" alt = "" />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder = "Search" type = "text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title = "home"/>
                <HeaderOption Icon = {SupervisorAccountIcon} title = "My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title = "Jobs"/>
                <HeaderOption Icon = {ChatIcon} title = "Messaging"/>
                <HeaderOption Icon = {NotificationsIcon} title = "Notifications"/>
                <HeaderOption avatar = {true} title = 'me' onclick = {logOutApp} />
            </div>
        </div>

    )
}

export default Header

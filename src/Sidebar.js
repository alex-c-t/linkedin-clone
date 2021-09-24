import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

const Sidebar = () => {

    const user = useSelector(selectUser);

    const recentItem = (topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>

  )

    return (
        <div className= "sidebar">
            <div className="sidebar__top">
                <img 
                src = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?xlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JILZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
                alt = "sidebar-bg-pic" />
                <Avatar src = {user.photoUrl} className = "sidebar__avatar">{user.email[0]}</Avatar>
                <h2>{user.name}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viewed you </p>    
                    <p className = "sidebar__statNumber"> 2,534</p>
                </div>
                <div className="sidebar__stat">
                    <p>views on posts </p>    
                    <p className = "sidebar__statNumber"> 2,334</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("software engineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>

        </div>

    );
}

export default Sidebar

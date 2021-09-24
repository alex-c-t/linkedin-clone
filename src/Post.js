import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react'
import InputOptions from './InputOptions';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
    return (
        <div ref ={ref} className = "post">
            <div className="post__header">
                <Avatar src={photoUrl?photoUrl:"https://brandyourself.com/blog/wp-content/uploads/linkedin-profile-picture-too-close.png"} alt = {name[0]} />
                <div className = "post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOptions Icon = {ThumbUpAltOutlinedIcon} title="Like" colorProp = "gray" />
                <InputOptions Icon = {ChatOutlinedIcon} title="Comment" colorProp = "gray" />
                <InputOptions Icon = {ShareOutlinedIcon} title="Share" colorProp = "gray" />
                <InputOptions Icon = {SendOutlinedIcon} title="Send" colorProp = "gray" />
            </div>
        </div>
    )
}
);

export default Post

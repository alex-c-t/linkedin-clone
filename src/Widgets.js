import React from 'react'
import './Widget.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const Widgets = () => {

    const newArticle = (heading, subtitle) =>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className = "widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newArticle("Article one is here", "Top news -9099 redaers")}
            {newArticle("Article two is here", "Top news -888 redaers")}
            {newArticle("Article three is here", "Top news -4454 redaers")}
            {newArticle("Article four is here", "Top news -454 redaers")}
        </div>
    )
}

export default Widgets

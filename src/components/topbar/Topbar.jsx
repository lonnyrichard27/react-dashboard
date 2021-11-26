import React from 'react'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
import { Link } from "react-router-dom";


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="top-left">
                    <Link to="/" className="link">
                        <span className="logo">Halifax Admin</span>
                    </Link>
                </div>
                <div className="top-right">
                    {/* <div className="topbar-iconscontainer">
                        <NotificationsNone />
                    </div>
                    <div className="topbar-iconscontainer">
                        <Language />
                    </div><div className="topbar-iconscontainer">
                        <Settings />
                    </div> */}
                    <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1587998973/Screenshot_20200427-103500_1587980139015_2.png" alt="" className="topavatar" />
                </div> 
            </div>
        </div>
    )
}

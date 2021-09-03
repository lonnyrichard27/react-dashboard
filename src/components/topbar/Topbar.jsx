import React from 'react'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="top-left">
                    <span className="logo">Ayokristi's Admin</span>
                </div>
                <div className="top-right">
                    <div className="topbar-iconscontainer">
                        <NotificationsNone />
                        <span className="topiconbadge">2</span>
                    </div>
                    <div className="topbar-iconscontainer">
                        <Language />
                        <span className="topiconbadge">2</span>
                    </div><div className="topbar-iconscontainer">
                        <Settings />
                        <span className="topiconbadge">2</span>
                    </div>
                    <img src="https://res.cloudinary.com/oluwaloni/image/upload/v1587998973/Screenshot_20200427-103500_1587980139015_2.png" alt="" className="topavatar" />
                </div> 
            </div>
        </div>
    )
}

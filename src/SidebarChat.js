import React from 'react'
import "./SidebarChat.css";
import { Avatar } from '@material-ui/core';


function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>nombre de la habitación</h2>
                <p>Ultimo mensaje</p>
            </div>
        </div>
    )
}

export default SidebarChat;

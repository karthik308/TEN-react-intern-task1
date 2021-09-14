import React from "react";
import './discord.css';

function Discord(){
    const handleClick = ()=>{
        window?.location?.assign('https://discord.com/invite/A8zBusy')
    }
    return(
        <div className="discord-container">
            <img className="discord-img" src="https://cdn.pixabay.com/photo/2017/08/12/19/01/legs-2635038_960_720.jpg" alt="" />
            <div className="discord-content">
            <p className="discord-para">Welcome to </p>
            <p className="discord-para"  >THE NEXT BIG THING</p>
            <button className="discord-btn" onClick={handleClick}> join TEN virtual campus</button>
        </div>
        </div>
    )
}
export default Discord;
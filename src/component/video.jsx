import React from "react";
import './video.css'
function Video() {
    return (
        <div className="video-div">
            <video className="bgvideo" autoPlay loop muted src="https://video.wixstatic.com/video/11062b_79271b7012564ed497d2774a895ab7fd/720p/mp4/file.mp4"></video>
            <span className="video-text">Power of TEN Consulting</span>
            <button className="btn-explore" onClick={()=>{
                window?.location?.assign('https://www.entrepreneurshipnetwork.net/forum')
            }}>Explore Here</button>
        </div>
    )
}

export default Video;
import React from "react";
import './aboutus.css'
// function changeBackground(e) {
//     e. target. style. background = 'red';
//     }
function Aboutus() {
    return (
        <div className="aboutus-head">
            <center><p>About us!</p></center>
            <div className="aboutus-container">

                <div className="aboutus-text">

                    <p>Learning Together From the Comfort of Your Home</p>
                    <button className="btn-learnmore" onClick={() => {
                        window?.location?.assign('https://www.entrepreneurshipnetwork.net/about')
                    }}><h2>Learn more</h2></button>
      

                </div>
                <img className="aboutus-img" src="https://static.wixstatic.com/media/749045033f5b4f539376b91db3710416.jpg/v1/fill/w_441,h_296,al_c,q_80,usm_0.66_1.00_0.01/Teen%20study%20group.webp" alt="aboutus" />
            </div>
        </div>
    )
}
export default Aboutus;
import React from "react";
import Subscribe from "./subscribe";
               
function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="social-container">
                    <a href="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/"> <img src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp" alt="facebook" /></a>
                    <a className="twitter" href="https://twitter.com/We_Are_TEN?s=08"> <img src="https://static.wixstatic.com/media/59687ffffc2042f885062ce2b0744381.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01/59687ffffc2042f885062ce2b0744381.webp" alt="twitter" /> </a>

                    <a href="https://www.instagram.com/theentrepreneurshipnetwork/"> <img src="https://static.wixstatic.com/media/9f9c321c774844b793180620472aa4f1.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01/9f9c321c774844b793180620472aa4f1.webp" alt="instagram" /> </a>

                </div>
                <Subscribe />
                <a href="https://www.entrepreneurshipnetwork.net/" className="aboutdiv"><p> About us!</p><p>FAQ'S</p><p> contact us </p></a>

            </div>
            <center>
               <h3 className="copyright-content">@{new Date().getFullYear()}Limitless Technologies - The Entrepreneurship Network</h3>

            </center>
        </div>

    )
}
export default Footer;
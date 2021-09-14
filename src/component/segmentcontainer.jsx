import React from "react";
import Card from './card';
import './segmentcontainer.css';
function Segmentcontainer() {
    return (
        <div className="segment-container">
            <div className="segment-block1" >
                <div className='segmaent-img1-text'>
                    <p>Your New</p>
                    <p>Journey Begins Here, </p>
                    <p>Today</p>
                </div>
                <div>
                    <img src="https://static.wixstatic.com/media/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.jpg/v1/fill/w_897,h_472,al_c,q_85,usm_0.66_1.00_0.01/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.webp" alt="entrepreneurship" />
                </div>
                <Card content='Entrepreneurship
made fun' btnLabel='Explore more' handleClick={() => {
                        window?.location?.assign('https://www.entrepreneurshipnetwork.net/product-page/entrepreneurship')
                    }} />
            </div>
            <div className="segment-block1" >
                <img src="https://static.wixstatic.com/media/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.jpg/v1/fill/w_603,h_405,al_c,q_80,usm_0.66_1.00_0.01/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.webp" alt="directmarketing" />
                <Card content='Digital Marketing' btnLabel='Explore more' />
                <img src="https://static.wixstatic.com/media/11062b_557462ab123440368447ab18a66043e5~mv2.jpg/v1/fill/w_334,h_450,al_c,q_80,usm_0.66_1.00_0.01/11062b_557462ab123440368447ab18a66043e5~mv2.webp" alt="productmanagement" />
            </div >
            <div className="segment-block1">
                <Card content='Product Management like a pro' btnLabel='Explore more' />
                <img src="https://static.wixstatic.com/media/a3ac449c86364dd8999922949876d09e.jpg/v1/fill/w_670,h_444,al_c,q_80,usm_0.66_1.00_0.01/a3ac449c86364dd8999922949876d09e.webp" alt="" />

            </div>
        </div>
    )
}
export default Segmentcontainer;

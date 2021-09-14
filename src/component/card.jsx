import React from "react";
import './card.css';

function Card({ content, handleClick, btnLabel }) {
    return (
        <div className='card-container'>
            <div className="card-content">{content}</div>
            <div>
                <button className="card-button" onClick={handleClick}>{btnLabel}</button>
            </div>

        </div>

    )
}
export default Card;
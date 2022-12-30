import React from 'react';
import "./Card.css";

const Card = ({title,imgsrc}) => {
    return (

        <div className="a-box">
            <div className="img-container">
                <div className="img-inner">
                    <div className="inner-skew">
                        <img src={imgsrc} />
                    </div>
                </div>
            </div>
            <div className="text-container">
                <h3>{title}</h3>
                <div>
                    This a demo experiment to skew image container. It looks good.
                </div>
            </div>
        </div>
    )
}

export default Card;
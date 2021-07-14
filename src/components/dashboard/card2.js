import React from 'react';
import './card2.css';

function Card2(props) {
    return (
        <div className='card-two' id={props.color}>
            
            <div className='card-symbol' >{props.symbol}</div>
            <div className='card-name' >{props.cardName}</div>
            <div className='card-number'  >{props.number}</div>
        </div>
    )
}

export default Card2;

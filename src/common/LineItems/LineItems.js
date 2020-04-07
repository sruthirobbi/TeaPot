import React from 'react';
import './LineItems.scss';


function LineItems(props){
    return(
        <div className="LineItems">
            <img src={require(`../../image/img2.jpg`)}/>
            <span>{props.itemName}</span>
            <span>
                <span>+</span>
                {props.price}
                <span>-</span>
            </span>
        </div>
    )
}

export default LineItems;
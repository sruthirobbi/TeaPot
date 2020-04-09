import React from 'react';
import './LineItems.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Avatar from '@material-ui/core/Avatar';


function LineItems(props){
    return(
        <div className="LineItems">
            <Avatar src={require(`../../image/${props.img}`)} alt={props.itemName}/>
            
            <span>{props.itemName}</span>
            <span><i className="fa fa-plus" aria-hidden="true"></i></span>
            <span>1</span>
            <span><i className="fa fa-minus" aria-hidden="true"></i></span>
            <span> ${props.price}</span>
        </div>
    )
}

export default LineItems;
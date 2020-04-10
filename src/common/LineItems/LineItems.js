import React,{useContext} from 'react';
import './LineItems.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Avatar from '@material-ui/core/Avatar';
import {CounterContext} from '../../components/Context/Context';


function LineItems(props){
    const {state, dispatch } = useContext(CounterContext);
    
    return(
        <div className="LineItems">
            <Avatar src={require(`../../image/${props.img}`)} alt={props.itemName}/>
            
            <span>{props.itemName}</span>
            <span  onClick={() => dispatch({ type: "onclick_plus",product:props.itemName,id:props.id })}><i className="fa fa-plus" aria-hidden="true"></i></span>
            <span>{props.quantity}</span>
            <span><i className="fa fa-minus" aria-hidden="true"></i></span>
            <span> ${props.price}</span>
        </div>
    )
}

export default LineItems;
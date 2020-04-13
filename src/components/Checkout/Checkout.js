import React,{useContext} from 'react';
import Title from '../../common/Title/Title';
import LineItems from '../../common/LineItems/LineItems';
import {Button, Divider} from '@material-ui/core';
import './Checkout.scss';
import {CounterContext} from '../Context/Context';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

function message(){

    let styles = {
        padding:"20px",
        textAlign: "center",
        fontSize: "18px",
        color: "#ff5c62"
      };

    return(
        <div style={styles}>Your Cart is Empty.</div>
    )
}




function Checkout(props){
    const { state } = useContext(CounterContext);
    
    
    return(
        <div className="Checkout" >
            <div className="closeDrawer" onClick={props.onclose} >
                <i className="fa fa-times fa-xs" aria-hidden="true"></i>
            </div>
            <Title title="Checkout Summary" fontsize="45px"/>
            
            {state.items.length === 0? message() : state.items.map((item,index)=>(
                <LineItems 
                            itemName={item.name} 
                            price={item.price} 
                            img={item.img} 
                            key={index} 
                            id={item.id}
                            quantity={item.quantity}
                            />
            ))}
            <Divider />
            <div className="TotalAmount">Total : ${state.total}</div>
            
            <Link to="/SignIn">
                <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large" 
                    fullWidth
                    onClick={props.onclose}
                >Proceed to Checkout</Button>
            </Link>
        </div>
    )
}

export default Checkout;
import React,{useContext} from 'react';
import Title from '../../common/Title/Title';
import LineItems from '../../common/LineItems/LineItems';
import Button from '@material-ui/core/Button';
import './Checkout.scss';
import {CounterContext} from '../Context/Context';
import '@fortawesome/fontawesome-free/css/all.min.css';

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


function Checkout(){
    const { state } = useContext(CounterContext);
   
    return(
        <div className="Checkout">
           
            <Title title="Checkout Summary"/>
            
            {state.items.length === 0? message() : state.items.map((item,index)=>(
                <LineItems itemName={item.name} price={item.price} img={item.img} key={index}/>
            ))}

            {/* {state.items.map((item,index)=>(
                <LineItems itemName={item.name} price={item.price} img={item.img} key={index}/>
            ))} */}
            
            <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large" 
                    fullWidth
            >Checkout</Button>
        </div>
    )
}

export default Checkout;
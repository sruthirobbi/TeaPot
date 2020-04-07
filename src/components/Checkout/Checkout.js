import React from 'react';
import Title from '../../common/Title/Title';
import LineItems from '../../common/LineItems/LineItems';
import Button from '@material-ui/core/Button';
import './Checkout.scss';



function Checkout(){



    return(
        <div className="Checkout">
            <Title title="Checkout Summary"/>
            <LineItems itemName="Lemon tea" price="21"/>
            <LineItems itemName="Lemon tea" price="21"/>
            <LineItems itemName="Lemon tea" price="21"/>
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
import React,{useContext}  from 'react';
import {Grid,Button,Modal} from '@material-ui/core';
import Title from '../../common/Title/Title';
import TeaSvg from '../../common/TeaSvg/TeaSvg';
import './ProductView.scss';
import {CounterContext} from '../Context/Context';


function ProductView(props){
    console.log(props)
    const { dispatch } = useContext(CounterContext);
 
    return(
        <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                <Grid container  spacing={2}  className="productPaper" style={{width:"68%"}}>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                       <img  src={process.env.PUBLIC_URL + `/image/${props.data.img}`} alt="types of Tea" className="productImage"/>
                        
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} className="productDetails">
                        <div className="product-title">
                            <Title title={props.data.name} fontsize="30px" marginTop="0"/> 
                            <TeaSvg/>
                        </div>
                        <div className="productText">
                            <span>Price: $ {props.data.price}</span>
                            <p>Weight: {props.data.quantity*16} oz</p>
                            <p>{props.data.desc}</p>
                            
                        
                        <Button color="secondary" variant="contained" className="productButton"
                        onClick={() => dispatch({ type: "onclick_cart",product:props.data,id:props.data.id })}
                        >Add to Cart</Button> 
                        <Button color="secondary" className="productButton" variant="contained" onClick={props.handleClose}>Continue Shopping</Button>
                        </div>
                    </Grid>
                </Grid>
        </Modal>
    )
}

export default ProductView;

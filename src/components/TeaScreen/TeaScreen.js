import React,{useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import data from '../../FakeData.json';
import Button from '@material-ui/core/Button';
import './TeaScreen.scss'
import {CounterContext} from '../Context/Context';

function TeaScreen() {
  const { dispatch } = useContext(CounterContext);

  return (
      <Grid container className="TeaScreen" spacing={2} justify="center">
          {data.map((list,index)=>
            <Grid item className="item" key={list.id} index={index}  xs={12} sm={3} md={3} >
                <img className="productImage" alt={list.name} src={require(`../../image/${list.img}`)}/>
                <div className="productPrice" >${list.price}</div>
                <div className="productName">{list.name}</div>
                <div><Button 
                          variant="contained" 
                          color="secondary"
                          onClick={() => dispatch({ type: "onclick_cart",product:list,id:list.id })}
                          >Add To Cart</Button>
                </div>
            </Grid>
          )}
      </Grid>
  );
}

export default TeaScreen
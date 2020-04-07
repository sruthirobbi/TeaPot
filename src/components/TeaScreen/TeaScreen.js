import React from 'react';
import Grid from '@material-ui/core/Grid';
import data from '../../FakeData.json';
import Button from '@material-ui/core/Button';
import './TeaScreen.scss'


function TeaScreen() {
 

  return (
    <div className="TeaScreen">
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Grid container justify="center" spacing={2}>
            {data.map((list,index)=>
              <Grid item key={list.id} index={index} sm={3}>
                <img className="productImage" src={require(`../../image/${list.img}`)}/>
                <Button variant="contained" color="secondary">Add To Cart</Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default TeaScreen
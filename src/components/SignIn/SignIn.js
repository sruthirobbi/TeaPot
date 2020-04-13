import React from 'react';
import Title from '../../common/Title/Title';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
         height: '400px',
      },
    },
    paper1:{
        display:'grid',
        gridTemplateRows: '75px 9px 109px 95px 37px',
    },
    paper2:{
        display:'grid',
        gridTemplateRows: '75px 62px 189px 12px 58px',
    },
    container:{
        textAlign:'center'
    },
    inputFields:{
        '& > *': {
            margin: '6px 24px',
             width: '300px',
          },
    },
    link:{
       marginLeft:'58%',
    },
    button:{
        width: '50%',
        margin: '17px 0px',
        marginLeft: '25%'
    },
    button2:{
        margin:'3px 30px',
        height:'40px',
    }
  }));


function SignIn(){

    const classes = useStyles();

    return(
        <div>
            <Title title="Sign-In" fontsize="30px"/>
            <div className={classes.root}>
            <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Paper elevation={3} className={classes.paper1}>
                            <Title title="Sign-In" fontsize="20px"/>
                            <Divider/>
                            
                            <form className={classes.inputFields} noValidate autoComplete="off">
                                <section>Email Address </section>
                                <TextField id="outlined-basic" label="Required" variant="outlined" />
                            </form>
                            
                            <form className={classes.inputFields} noValidate autoComplete="off">
                                <section> Password </section>
                                <TextField id="outlined-basic" label="Required" variant="outlined" />
                            </form>
                            <div>
                                <Link className={classes.link} href="#"  color="secondary">
                                    Forget Password ?
                                </Link>
                            </div>
                            <Divider/>
                            <Button className={classes.button} variant="contained" color="secondary">Sign-In</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Paper elevation={3} className={classes.paper2}>
                            <Title title="No Account? No Problem!" fontsize="20px"/>
                            <Divider/>
                            <div className={classes.container}>
                                <Title title="Continue to checkout without an account" fontsize="20px"/>
                                <Button className={classes.button2} variant="contained" color="secondary">Continue as a Guest</Button>
                            </div>
                            <Divider/>
                            <Button  className={classes.button2} variant="contained" color="secondary">Sign-In or  
                            <Link  href="#" > Creat an Account </Link></Button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default SignIn
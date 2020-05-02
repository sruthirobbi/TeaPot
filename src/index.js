import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import red from '@material-ui/core/colors/red';



const theme = createMuiTheme({
    palette:{
        primary:{
            main:red[900]
        },
        secondary:{
            main:red[400]
        }
        
    }
})

ReactDOM.render(
<MuiThemeProvider theme={theme}>
    <BrowserRouter >
        <App />
    </BrowserRouter>
</MuiThemeProvider>, 
document.getElementById('root')
);



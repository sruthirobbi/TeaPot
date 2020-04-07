import React from 'react';
import './Title.scss'

function Title(props){
    return(
        <div className="subTitles">
            {props.title}
        </div>
    )
}

export default Title;
import React from 'react';
import './Title.scss'

function Title(props){
    return(
        <div className="subTitles" style={{ fontSize:props.fontsize }}>
            {props.title}
        </div>
    )
}

export default Title;
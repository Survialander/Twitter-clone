import React, { Component } from 'react';
import logo from '../pages/logo.png';
import './logo.css'

export default class Logo extends Component {
render(){
    
    return(
        <div className="logoCamp">
        <center>
        <img src={logo} alt="" className="logo"/>
        <br/><span className="nome">Koopet</span>
        </center>
        </div>
    );
}
}
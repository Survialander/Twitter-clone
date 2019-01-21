import React, { Component } from 'react';
import './twet.css';
import api from '../services/api';

export default class Tweet extends Component {
    Like = async e =>{
        e.preventDefault();

        api.post(`likes/${this.props.Tweet._id}`);
    }
    render() {
        const { Tweet } = this.props;

        return (
            <li>
                <h1>Autor: {Tweet.author}</h1>
                {Tweet.content} <br/>
                <button type="button" onClick={this.Like} value={Tweet._id}><img src={require('../like.png')} alt=" " /></button><span>{Tweet.likes}</span>
            </li>
        );
    }
}
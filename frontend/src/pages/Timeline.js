import React, { Component } from "react";
import './Timeline.css';
import api from '../services/api';
import Tweet from "../components/Tweet";
import Logo from '../components/Logo';
import socket from 'socket.io-client';

export default class Timeline extends Component {
    state = {
        Tweets: [],
        TextTweet: '',
    };
    
    /* Funções */
    subscribeToEvents = () => {
        const io = socket('http://localhost:500');

        io.on('tweet', data => {
            this.setState({ Tweets: [data, ...this.state.Tweets] });
        });

        io.on('like', data => {
            console.log(data)
        });
    }

    async componentDidMount() {
        this.subscribeToEvents(); 
        const response = await api.get('tweets');
        this.setState({ Tweets: response.data });
    };

    HandleInput = e => {
        this.setState({ TextTweet: e.target.value });
    };

    TextCatch = async e => {

        e.preventDefault();

        const content = this.state.TextTweet;

        if (!content.length) return;

        const author = localStorage.getItem("@Twiteste:username");

        await api.post('tweets', { content, author });

        console.log(content, author);

        this.setState({ TextTweet: '' });
    };

    Logout = e => {
        e.preventDefault();

        this.props.history.push('/');
    };

    /* HTML RENDER */
    render() {
        return (
            <div className="offset-md-3 col-md-6 offset-md-3">

                <center><Logo /></center>

                <div className="form-group form">
                    <form onSubmit={this.TextCatch}>
                        <textarea type="text" className="form-control" placeholder="??????" value={this.state.TextTweet} onChange={this.HandleInput} />

                        <button type="submit" className="btn btn-danger btn-sm">Enviar</button>
                        <button type="button" className="btn btn-danger btn-sm sair" onClick={this.Logout}>Sair</button>
                    </form>
                    
                    <ul>
                        {this.state.Tweets.map(Tweets => (<Tweet key={Tweets._id} Tweet={Tweets} />))}
                    </ul>

                </div>

            </div>
        );
    }
}
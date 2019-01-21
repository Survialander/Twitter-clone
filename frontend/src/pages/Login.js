import React, { Component } from 'react';
import './Login.css';
import Logo from '../components/Logo'

export default class Login extends Component {
    state = {
        username: '',   
    };

    HandleChange = (e) => {
        this.setState({
            username: e.target.value,            
        });
    }

    HandleSubmit = (e) => {
        e.preventDefault();

        const {username} = this.state;

        if(!username.length) return(alert("Digite um nome de usuario"));

        localStorage.setItem('@Twiteste:username', username);

        this.props.history.push('/timeline');
    };
    
    render() {
        return (
                <div className="offset-md-5 col-md-2 offset-md-5 login">
                    
                    <div className="form-group">
                        <form onSubmit={this.HandleSubmit}>
                            <label> <Logo /> </label>
                            <input value={this.state.username} onChange={this.HandleChange} placeholder="Login" className="form-control" type="text" />
                            <button type="submit" className="btn btn-danger btn-lg btn-block">Login</button>
                        </form>
                    </div>

                </div>
        );
    }
}
import React from 'react';
import './ForgotPassword.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



export class ForgotPassword extends React.Component{
    render(){
      return (
        <div className="contain jumbotron" style={{background: '#50E3C2', height: '47.4rem'}}>
            <h1 className="display-4">Forget your password?</h1>
            <p className="lead">Please get in contact with the administrator: admin@gmail.com</p>
            <Link to='/'>
                <button id="forgotPassword" 
                    className="btn btn-secondary" >
                    Back to Login
                </button>
            </Link>
        </div>
      );
    }
  }


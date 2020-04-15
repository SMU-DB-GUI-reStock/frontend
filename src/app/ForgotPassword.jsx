import React from 'react';
import './ForgotPassword.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



export class ForgotPassword extends React.Component{
    render(){
      return (
        <div className="contain" style={{background: '#50E3C2', height: '47.4rem'}}>
            <h1>Forget your password?</h1>
            <h4>Please get in contact with the administrator: admin@gmail.com</h4>
            <Link to='/'>
                <button id="forgotPassword" 
                    className="btn btn-secondary" >
                    Login
                </button>
            </Link>
        </div>
      );
    }
  }


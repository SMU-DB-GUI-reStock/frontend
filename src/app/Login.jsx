import React, {Component} from 'react';
import Logo from '../images/logo.png';
import './Login.css';
export class Login extends React.Component{
    // state = {
    //     productTypes: [new Product(1, "Dairy", "Milk", 6.99)]
    // }

    render(){
        return(<>
            <div className="App">
                <header className="App-header">
                <img src={Logo}></img>
    
                <div>
                <form>
                    <div className="form-group">
                        <label HTMLfor="username">Username</label>
                        <input name="username" type="text" className="form-control" placeholder="Enter email"></input>
                    </div>
                    <div className="form-group">
                        <label HTMLfor="password">Password</label>
                        <input name="password" className="form-control" type="password" placeholder="Password"></input>
                    </div>    
                        <button id="logIn" 
                            className="btn btn-primary">
                            Log In
                        </button>
                    
                </form>
                </div>
                <button id="forgotPassword" 
                    className="btn btn-secondary" >
                    Forgot Password?
                </button>
                </header>
            </div>
            {/* <ProductsList productTypes = {this.state.productTypes}/> */}
            </>
        );
    }
}

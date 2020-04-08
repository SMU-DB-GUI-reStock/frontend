import React, {Component} from 'react';

export class Login extends React.Component{
    // state = {
    //     productTypes: [new Product(1, "Dairy", "Milk", 6.99)]
    // }

    render(){
        return(<>
            <div className="App">
                <header className="App-header">
                <img src="https://amznsellertools.com/wp-content/uploads/Restock-Pro-Logo.png"></img>
                <h2>Log in</h2>
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

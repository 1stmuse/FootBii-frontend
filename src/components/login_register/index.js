import React, { Component } from 'react';
import Login from './login'
import Register from './Register'

class index extends Component {
    render() {
        return (
            <div className='log-reg-wrapper'>
                <div className='foot-header' >
                    <h2>
                        FOOT
                        <span>Bill</span>
                    </h2>
                    <p>
                        Choose and buy shoes from your <br/>
                        Favourites Shoe Brands
                    </p>
                </div>
                <div className='login-register'>
                    <Register/>
                    <Login/>
                </div>
            </div>
        );
    }
}

export default index;
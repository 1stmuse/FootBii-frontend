import React, { Component } from 'react';
import Header from '../Header-Footer/Header'
import Drawer from '../drawer/Drawer'
import HomeProducts from '../home-products'

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div style={{display:'flex', justifyContent:'space-between'}} >
                    <Drawer/>
                    <HomeProducts/>
                </div>
            </div>
        );
    }
}

export default Home;
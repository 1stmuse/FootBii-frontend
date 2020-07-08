import React, { Component } from 'react';
import Header from '../Header-Footer/Header'
import Drawer from '../drawer/Drawer'

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Drawer/>
            </div>
        );
    }
}

export default Home;
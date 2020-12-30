import React, { Component } from 'react';

import HomeProducts from '../home-products'
import HomeLayout from '../../HOC/HomeLayout'

class Home extends Component {
    render() {
        return (
            <HomeLayout>
                <HomeProducts/>
            </HomeLayout>
        );
    }
}

export default Home;
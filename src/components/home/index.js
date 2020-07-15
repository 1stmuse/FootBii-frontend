import React, { Component } from 'react';
import Header from '../Header-Footer/Header'
import Drawer from '../drawer/Drawer'
import HomeProducts from '../home-products'
import ShoeInfo from '../shoeInfo'

class Home extends Component {
    render() {
        return (
            <div style={{minHeight:'650px', border:'1px solid red'}}>
                <Header/>
                <div style={{display:'flex', justifyContent:'space-between'}} >
                    <Drawer/>
                    {/* <HomeProducts/> */}
                    <ShoeInfo/>
                </div>
            </div>
        );
    }
}

export default Home;
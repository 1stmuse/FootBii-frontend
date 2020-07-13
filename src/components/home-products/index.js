import React from 'react';
import hero from '../../assets/IMG-20200702-WA0013.jpg'
import Shoes from '../Shoes'
import Button from '../../utils/button'

const HomeProducts = () => {
    return (
        <div className='home-prod-main'>
            <div className='home-prod-hero'>
                <img src={hero} width='100%' height='200px'/>
            </div>
            <div className='dics'>
                <h2>Discover</h2>
                <h2>New</h2>
                <h2>Best Offer</h2>
            </div>
            <div className='filt-btn'>
                <Button
                    width='80px'
                    margin='0px 10px 0px 0px'
                    bck='white'
                    cursor='pointer'
                    color='black'  
                    shadow='1px 3px 5px gray' 
                >
                    <div className='filt-btn-flex'><p>Filter</p> <i>iii</i></div>
                </Button>
                <Button
                    width='120px'
                    margin='0px 10px 0px 0px'
                    bck='white'
                    cursor='pointer'
                    color='black' 
                    shadow='1px 3px 5px gray'
                >
                    <div className='filt-btn-flex'><p>Product type</p><i>ii</i> </div>
                </Button>
                <Button
                    width='100px'
                    margin='0px 10px 0px 0px'
                    bck='white'
                    cursor='pointer'
                    color='black'   
                    shadow='1px 3px 5px gray'
                >
                    <div className='filt-btn-flex'><p>size</p> <i>ii</i></div>
                </Button>
                <Button
                className='try'
                    width='100px'
                    margin='0px 10px 0px 0px'
                    bck='white'
                    cursor='pointer'
                    color='black'  
                    shadow='1px 3px 5px gray'  
                >
                    <div className='filt-btn-flex'><p>Color</p> <i>iii</i></div>
                </Button>
                <Button
                    width='100px'
                    margin='0px 10px 0px 0px'
                    bck='white'
                    cursor='pointer'
                    color='black'
                    shadow='1px 3px 5px gray'
                >
                    <div className='filt-btn-flex'><p>Sort</p> <i>iii</i></div>
                </Button>
            </div>
            <div style={{display:'flex'}} >
                <Shoes/>
                <Shoes/>
                <Shoes/>
            </div>
        </div>
    );
};

export default HomeProducts;
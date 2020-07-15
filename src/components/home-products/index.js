import React from 'react';
import hero from '../../assets/nikee.jpg'
import Shoes from '../../utils/Shoes'
import Button from '../../utils/button'
import Hero from '../../utils/Hero'

const HomeProducts = () => {
    return (
        <div className='home-prod-main'>
            <Hero img={hero} />
            <div className='dics'>
                <h2>Discover</h2>
                <h2>New</h2>
                <h2>Best Offer</h2>
            </div>
            <div className='filt-btn'>
                <Button
                    width='130px'
                    margin='0px 20px 0px 0px'
                    bck='white'
                    cursor='pointer'
                    color='black'  
                    shadow='1px 3px 5px gray' 
                >
                    <div className='filt-btn-flex'><p>Filter</p> <i>iii</i></div>
                </Button>
                <Button
                    width='130px'
                    margin='0px 20px 0px 0px'
                    bck='white'
                    cursor='pointer'
                    color='black'   
                    shadow='1px 3px 5px gray'
                >
                    <div className='filt-btn-flex'><p>size</p> <i>ii</i></div>
                </Button>
                <Button
                className='try'
                    width='130px'
                    margin='0px 20px 0px 0px'
                    bck='white'
                    cursor='pointer'
                    color='black'  
                    shadow='1px 3px 5px gray'  
                >
                    <div className='filt-btn-flex'><p>Color</p> <i>iii</i></div>
                </Button>
                <Button
                    className='try'
                    width='130px'
                    margin='0px 20px 0px 0px'
                    bck='white'
                    cursor='pointer'
                    color='black'  
                    shadow='1px 3px 5px gray'  
                >
                    <div className='filt-btn-flex'><p>Price Range</p> <i>iii</i></div>
                </Button>
                <Button
                    width='130px'
                    margin='0px 20px 0px 0px'
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
            <div className='hm-prod-footer'>
                <div className='hm-prev-nxt'>
                    <div><i class="fa fa-angle-left" aria-hidden="true"></i><p>Prev</p> </div>
                    <div><p>Prev</p><i class="fa fa-angle-right" aria-hidden="true"></i> </div>
                </div>
                <div className='hm-footer-social'>
                    <i className='fa fa-twitter fa-2x'></i>
                    <i className='fa fa-instagram fa-2x'></i>
                    <i className='fa fa-linkedin fa-2x'></i>
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;
import React from 'react';
import git from '../../assets/git.png'

const Header = () => {
    return (
        <div>
            <header className='home-header'>
                <div className='header-logo'>
                    <h1>Foot<span>Bill</span></h1>
                </div>
                <div className='header-search-div'>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input 
                        type='text' 
                        className='header-search' 
                        placeholder='Search your items and brands'
                    />
                </div>
                <div className='header-icons'>
                    <div className='like-div same-icon'>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p>0</p>
                    </div>
                    <div className='cart-div same-icon'>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <p>0</p>
                    </div>
                    <div className='profile-div'>
                        <img src={git} alt=''/>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
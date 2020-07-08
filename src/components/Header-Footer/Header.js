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
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input 
                        type='text' 
                        className='header-search' 
                        placeholder='Search your items and brands'
                    />
                </div>
                <div className='header-icons'>
                    <div className='like-div same-icon'>
                        <i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>
                        <p>0</p>
                    </div>
                    <div className='cart-div same-icon'>
                        <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                        <p>0</p>
                    </div>
                    <div className='profile-div'>
                        <img src={git} />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
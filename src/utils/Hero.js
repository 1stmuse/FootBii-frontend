import React from 'react';

const Hero = ({img}) => {
    return (
        <div className='hero_div'>
            <img src={img} alt='falsh sales here' width='100%'/>
        </div>
    );
};

export default Hero;
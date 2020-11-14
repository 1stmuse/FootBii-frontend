import React, {useState} from 'react';
import black from '../assets/black.jpg'

const Shoes = ({shoe}) => {
    const [enter, setEnter]= useState(false)
    const mEnter=()=>{
        setEnter(true)
    }
    const mLeave=()=>{
        setEnter(false)
    }
    return (
        <div className={`shoe-div-one ${enter && 'shoe-div-one-show'}`} onMouseEnter={mEnter} onMouseLeave={mLeave} >
            <div className={`rel ${enter && 'rel-show'}`}>
                <img src={shoe.img} className={`bgSh-hide ${enter && 'bgSh-show'}`} />
                <div className={`sh-png ${enter && 'move-png'}`} >
                    <img src={shoe.img} width='50px' height='50px' />
                </div>
                <div className={`hide ${enter && 'show'}`} >
                    <h3>{shoe.model} </h3>
                    <p>{shoe.price} </p>
                    <p> <i class="fa fa-heart-o fa-2x" aria-hidden="true"></i></p>
                </div>
            </div>
        </div>
    );
};

export default Shoes;
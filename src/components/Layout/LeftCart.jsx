import React from 'react';
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'

const LeftCart = () => {
    return (
        <div>
            <img className='my-2' src={one} alt="" />
            <img className='my-2' src={two} alt="" />
            <img className='my-2' src={three} alt="" />
        </div>
    );
};

export default LeftCart;
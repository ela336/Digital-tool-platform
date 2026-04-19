import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Empty = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-3 '>
            <   ShoppingCart size={64} className=' text-[#9199a0] font-bold' />
            <p className='text-[20px] text-[#627382]'>Your cart is empty</p>
        </div>
    );
};

export default Empty;
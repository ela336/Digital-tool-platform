import React, { useState } from 'react';
import Empty from './Empty';

const Cartsection = ({ selectedtools, setselectedtools,settotal,total }) => {

    
  return (
    <div className='border border-gray-300 p-6 m-30 rounded-2xl '>
      <h3 className='mb-4 text-[24px] font-bold'>Your Cart</h3>

      {selectedtools.map((card, index) => (
        <div key={index} className='bg-[#F9FAFC] mb-3 p-3 flex items-center justify-between shadow'>
           <div className='flex items-center gap-4'> 
            <div className='w-12 h-12 rounded-full bg-white  p-1 border-2 border-[#627382] '>
          <img src={card.image} alt={card.title}  />
          </div>
          <div>
            <h3 className='font-semibold text-[20px]'>{card.title}</h3>
            <p className='text-[16px] font-medium text-[#627382]'>${card.price}</p>
          </div>
          </div>


          <button className='font-bold text-[16px] text-[#FF3980]'>remove</button>
        </div>
      ))}



      

      {selectedtools.length==0 && <Empty></Empty>}


      <div className='mt-6'>
        <div className='flex items-center justify-between'>
            <p className='text-627382'>Total:        </p>
            <h3 className='font-bold text-[24px]'>${total}</h3>
        </div>


        <button 
        onClick={ ()=>{
            setselectedtools([]);
            settotal(0);

        }
        }
        
        className='btn btn-primary w-full font-bold text-[20px] rounded-3xl mt-3'>Proceed to Checkout</button>



      </div>
      
    </div>
  );
};

export default Cartsection;


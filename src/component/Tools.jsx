import React, { useState } from 'react';
import { Check } from "lucide-react";
import { use } from "react";
import Cartsection from './Cartsection';
import { toast } from "react-toastify";





const Tools = ( {datapromise,type,settype,selectedtools,setselectedtools} ) => {
    const cards=use(datapromise);
    const[total,settotal]=useState(0);
    
    
   
  console.log(selectedtools);

    return (
        <>
        <div className='text-center mt-22 space-y-4'>
            <h3 className='font-extrabold text-[48px] '>Premium Digital Tools</h3>
            <p className='text-[16px] font-normal text-[#627382] text-center' >Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className='flex items-center justify-center gap-6 container mx-auto mt-8'>
                <button onClick={()=> settype("Products")}
                className={` ${type === "Products"?" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ":" bg-white text-black"}  font-bold py-2 px-4 rounded-3xl text-[16px] `}>Products</button>
                <button onClick={()=> settype("cart")}
                 className={` ${type ==="cart"?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" :" bg-white text-black"} font-bold py-2 px-4 rounded-3xl text-[16px] `}>Cart({selectedtools.length})</button>
            </div>
            
        </div>

       {type==="Products" ?
        (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-[80%] container mx-auto mt-12'>
           {cards.map((card, index) =>
            <div key={index} className='rounded-3xl border border-[#b5bdc5] p-6 space-y-4'>
                                    <div className='flex justify-between items-center' >
                                       <div className='rounded-full border border-[#c8d0d7] flex items-center justify-center w-14 h-14'> <img src={card.image} alt={card.title} width="40px" height="40px" /></div>
                                        <div className='bg-blue-300 text-blue-700 rounded-3xl p-2'>{card.status}</div>
                                        </div>
                                        <div>
                                            <h3 className='text-[24px] font-bold mb-3'>{card.title}</h3>
                                            <p className='text-[16px] text-[#627382]'>{card.description}</p>
                                        </div>
                                        <div className='flex '>
                                            <h3 className='font-bold'>{card.price}</h3><span className='text-[16px] text-[#627382]'>/{card.period}</span>
                                            </div>
            
                                            <div className="space-y-2">
  {card.features.map((feature, i) => (
    <div key={i} className="flex items-center gap-2">
      <Check className="text-green-500" />
      <p className="text-[16px] text-[#627382] font-medium">
        {feature}
      </p>
    </div>
  ))}
</div>
                                        <button 
                                        onClick={()=>{ 
                                          setselectedtools([...selectedtools, card]);
                                           settotal(prev => prev + Number(card.price));

                                           
                                           toast(`${card.title} is added to cart!`);
                                      
                                        }}
                                        className='btn btn-primary rounded-3xl w-full'>Buy Now</button>
                                        
                                    
                                </div>
           )}
        </div>) :


        ( <Cartsection selectedtools={selectedtools} setselectedtools={setselectedtools}  settotal={settotal} total={total}></Cartsection>)}

        
        </>
    );
};

export default Tools;
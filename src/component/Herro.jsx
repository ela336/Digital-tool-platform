import React from 'react';
import { Play } from "lucide-react";

const Herro = () => {
    return (
       <div className=" bg-base-100 container mx-auto my-5 w-[85%] flex items-center justify-between ">
        <div className='space-y-6'>
            <button className='btn rounded-3xl bg-[#d4cff9] text-[#4F39F6]'>
             <div className='h-4 w-4 rounded-[100%] bg-[#a197eb] flex justify-center items-center' >
                <div className='h-2 w-2 rounded-[100%] bg-[#4F39F6]'>
                 </div>
                 </div>
              New: AI-Powered Tools Available
            </button>
            <h1 className='font-extrabold text-[70px] w-160'>Supercharge Your <br /> Digital Workflow</h1>
            <p className='text-[18px] text-[#627382] line-clamp-3 w-160'>Access premium AI tools, design assets, templates, and productivity 
                software—all in one place. Start creating faster today.Explore Products</p>

                <div className='flex items-center gap-6'>
                    <button className='btn rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold'>Explore Products</button>
                    
                    <button className='flex items-center gap-1 btn border border-[#4F39F6]  rounded-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent '> <Play className='text-[#4F39F6] '/> Watch Demo</button>
                </div>
        </div>
        <div className='p-6'>
          <img src="/assets/banner.png" />
        </div>
       </div>
    );
};

export default Herro;
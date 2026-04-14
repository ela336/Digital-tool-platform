import React from 'react';
import { Play } from "lucide-react";

const Herro = () => {
    return (
       <div className=" bg-base-100 container mx-auto w-[85%] flex items-center justify-between gap-2">
        <div>
            <button className='btn rounded-3xl bg-[#d4cff9] text-[#4F39F6]'>
             <div className='h-4 w-4 rounded-[100%] bg-[#a197eb] flex justify-center items-center' >
                <div className='h-2 w-2 rounded-[100%] bg-[#4F39F6]'>
                 </div>
                 </div>
              New: AI-Powered Tools Available
            </button>
            <h1 className='font-extrabold text-[70px]'>Supercharge Your <br /> Digital Workflow</h1>
            <p className='text-[18px] text-[#627382]'>Access premium AI tools, design assets, templates, and productivity 
                software—all in one place. Start creating faster today.Explore Products</p>

                <div>
                    <button>Explore Products</button>
                    
                    <button> <Play /> Watch Demo</button>
                </div>
        </div>
        <div>
          <img src="/assets/banner.png" alt="" />
        </div>
       </div>
    );
};

export default Herro;
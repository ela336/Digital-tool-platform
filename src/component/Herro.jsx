import React from 'react';
import { Play } from "lucide-react";
import heroimage from "../assets/banner.png"



const Herro = () => {
    return (
       <div className=" bg-base-100 container mx-auto my-5  md:w-[85%] flex flex-col lg:flex-row items-center justify-center md:justify-between ">
        <div className='space-y-6 w-[96%] md:w-[85%]'>
            <button className='btn rounded-3xl bg-[#d4cff9] text-[#4F39F6] text-center md:text-left '>
             <div className='h-4 w-4 rounded-[100%] bg-[#a197eb] flex justify-center items-center' >
                <div className='h-2 w-2 rounded-[100%] bg-[#4F39F6]'>
                 </div>
                 </div>
              New: AI-Powered Tools Available
            </button>
            <h1 className='font-bold md:font-extrabold text-[35px] md:text-[70px] text-center w-full lg:w-160'>Supercharge Your <br /> Digital Workflow</h1>
            <p className='text-[15px] md:text-[18px] text-[#627382] text-center md:line-clamp-3 w-full md:w-160'>Access premium AI tools, design assets, templates, and productivity 
                software—all in one place. Start creating faster today.Explore Products</p>

                <div className='flex items-center gap-6'>
                    <button className='btn rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold'>Explore Products</button>
                    
                    <button className='flex items-center gap-1 btn border border-[#4F39F6]  rounded-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent '> <Play className='text-[#4F39F6] '/> Watch Demo</button>
                </div>
        </div>
        <div className='p-6 w-full'>
          <img src={heroimage} alt="" />
        </div>
       </div>
    );
};

export default Herro;
import React from 'react';

const Stat = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
        <div className='flex items-center justify-evenly p-9 gap-3  container mx-auto w-[60%]'>
            <div>
                <h2 className='font-extrabold text-[60px] text-white'>50K+</h2>
                <p className='font-medium text-[20px] text-[#ffffffc1]'>Active Users</p>
            </div>

            <div>
                <h2 className='font-extrabold text-[60px] text-white'>200+</h2>
                <p className='font-medium text-[20px] text-[#ffffffc1]'>Premium Tools</p>
            </div>

            <div>
                <h2 className='font-extrabold text-[60px] text-white'>4.9</h2>
                <p className='font-medium text-[20px] text-[#ffffffc1]'>Rating</p>
            </div>
        </div>
        </div>
    );
};

export default Stat;
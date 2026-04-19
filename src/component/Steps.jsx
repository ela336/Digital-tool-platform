import React from 'react';
import { Check } from "lucide-react";

const Steps = () => {
    return (
        <>
        <div className='bg-[#F9FAFC] text-center p-16 space-y-4 mt-16'>
            <h2 className='font-extrabold text-[20px] md:text-[48px] line-clamp-1'>Get Started in 3 Steps</h2>
            <p className='text-[18px] md:text-[26px] text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            <div className='flex flex-col md:flex-row md:items-center justify-evenly  gap-4 md:gap-2 mt-12 container  md:mx-auto  md:p-3  '>
                <div className='shadow rounded-3xl bg-white py-8 px-4 space-y-3 '>
                    <div className='w-10 h-10 bg-[#4F39F6]  rounded-full text-white flex items-center justify-center  relative left-100 top-3'>01</div>
                    <div className='w-23 h-23 flex items-center justify-center rounded-full mx-auto bg-[#dbcae8]'><img src="../assets/user.png" alt="" /></div>
                    <h3 className='font-bold text-[24px]'>Create Account</h3>
                    <p className='text-[16px] text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
            

             
                <div className='shadow rounded-3xl bg-white py-8  px-4 space-y-3 '>
                    <div className='w-10 h-10 bg-[#4F39F6]  rounded-full text-white flex items-center justify-center relative left-90 top-3 '>02</div>
                    <div className='w-23 h-23 flex items-center justify-center rounded-full mx-auto bg-[#dbcae8]'><img src="../assets/package.png" alt="" /></div>
                    <h3 className='font-bold text-[24px]'>Choose Products</h3>
                    <p className='text-[16px] text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
            



             <div className='shadow rounded-3xl bg-white py-8 px-4 space-y-3 '>
                
                    <div className='w-10 h-10 bg-[#4F39F6]  rounded-full text-white flex items-center justify-center relative left-90 top-3 '>03</div>
                    <div className='w-23 h-23 flex items-center justify-center rounded-full mx-auto bg-[#dbcae8]'><img src="../assets/rocket.png" alt="" /></div>
                    <h3 className='font-bold text-[24px]'>Start Creating</h3>
                    <p className='text-[16px] text-[#627382]'>Download and start using your premium tools immediately.</p>
                
            </div>
        </div>
        </div>



        <div className=' text-center md:p-16 space-y-4 mt-16'>
            <h2 className='font-extrabold text-[30px] md:text-[48px]'>Simple, Transparent Pricing</h2>
            <p className='text-[20px] md:text-[26px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>


            <div  className='flex flex-col md:flex-row items-center gap-5 justify-center mt-8'>
                 <div  className='rounded-3xl border border-[#b5bdc5] p-6 space-y-4 bg-[#F9FAFC]'>
                                    <div className='w-75'>
                                      
                                            <h3 className='text-[24px] font-bold mb-3 text-left'>Starter</h3>
                                            <p className='text-[16px] text-[#627382] text-left'>Perfect for getting started</p>
                                        </div>
                                        <div className='flex '>
                                            <h3 className='font-bold'>$0</h3><span className='text-[16px] text-[#627382]'>/month</span>
                                            </div>
            
                                            <div className="space-y-2">
  
    <div className="flex items-center gap-2">
      <Check className="text-green-500" /> <p className="text-[16px] text-[#627382] font-medium">    Access to 10 free tools     </p>
    </div>
    <div className="flex items-center gap-2">
      <Check className="text-green-500" /> <p className="text-[16px] text-[#627382] font-medium">    Basic templates     </p>

    </div>

    <div className="flex items-center gap-2">
      <Check className="text-green-500" /> <p className="text-[16px] text-[#627382] font-medium">    Community support     </p>
    </div>

    <div className="flex items-center gap-2">
      <Check className="text-green-500" /> <p className="text-[16px] text-[#627382] font-medium">    1 project per month    </p>
    </div>
  
</div>
                                        <button className='btn btn-primary rounded-3xl w-full'>Buy Now</button>
                                    
             </div>




              <div  className='rounded-3xl border border-[#b5bdc5] p-6 space-y-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
                                    <div className='w-75  ' >
                                           <div className=' relative bottom-9 shadow left-25 w-24 h-6  text-[14px] font-bold p-0.5 rounded-3xl bg-[#fff3eb] text-[#BB4D00]'>Most popular</div>
                                            <h3 className='text-[24px] font-bold mb-3 text-left'>Pro</h3>
                                            <p className='text-[16px] text-left'>Best for professionals</p>
                                        </div>
                                        <div className='flex '>
                                            <h3 className='font-bold'>$29</h3><span className='text-[16px] text-[#627382]'>/month</span>
                                            </div>
            
                                            <div className="space-y-2">
  
    <div className="flex items-center gap-2">
      <Check className="text-green-500" /> <p className="text-[16px]  font-medium">    Access to all premium tools     </p>
    </div>
    <div className="flex items-center gap-2">
      <Check className="text-green-500" /> <p className="text-[16px]  font-medium">    Unlimited templates    </p>

    </div>

    <div className="flex items-center gap-2">
      <Check className="text-green-500" /> <p className="text-[16px] font-medium">    Priority support     </p>
    </div>

    <div className="flex items-center gap-2">
      <Check className="text-green-500" /> <p className="text-[16px]  font-medium">    Unlimited projects    </p>
    </div>
  
</div>
                                        <button className='btn text-[#4F39F6] rounded-3xl w-full'>Buy Now</button>
                                    
             </div>

               <div  className='rounded-3xl border border-[#b5bdc5] p-6 space-y-4  bg-[#F9FAFC]'>
                                    <div className='w-75'>
                                      
                                            <h3 className='text-[24px] font-bold mb-3 text-left'>Enterprise</h3>
                                            <p className='text-[16px] text-[#627382] text-left'>For teams and businesses</p>
                                        </div>
                                        <div className='flex '>
                                            <h3 className='font-bold'>$99</h3><span className='text-[16px] text-[#627382]'>/month</span>
                                            </div>
            
                                            <div className="space-y-2">
  
    <div className="flex items-center gap-2">
      <Check className="text-green-500" /> <p className="text-[16px] text-[#627382] font-medium">    Everything in Pro     </p>
    </div>
    <div className="flex items-center gap-2">
      <Check className="text-green-500" /> <p className="text-[16px] text-[#627382] font-medium">    Team collaboration   </p>

    </div>

    <div className="flex items-center gap-2">
      <Check className="text-green-500" /> <p className="text-[16px] text-[#627382] font-medium">    Custom integrations  </p>
    </div>

    <div className="flex items-center gap-2">
      <Check className="text-green-500" /> <p className="text-[16px] text-[#627382] font-medium">    Dedicated support   </p>
    </div>
  
</div>
                                        <button className='btn btn-primary rounded-3xl w-full'>Buy Now</button>
                                    
             </div>


             
            </div>
            

             
                
            



            
        
        </div>


     </>
    );
};

export default Steps;
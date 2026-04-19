import React from 'react';
import { ShoppingCart } from "lucide-react";



const Navbar = ({selectedtools, setselectedtools}) => {
    return (
        
      
      
     <div className="navbar bg-base-100 container mx-auto w-[85%]">
  
  
  <div className="navbar-start">
    <h2 className=" text-[40px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold ">DigiTools</h2>
  </div>

  {/* Center */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><button>Products</button></li>
      <li><button>Features</button></li>
      <li><button>Pricing</button></li>
      <li><button>Testimonials</button></li>       
      <li><button>FAQ</button></li>
    </ul>
  </div>

  {/* Right */}
  <div className="navbar-end flex items-center  gap-5  font-semibold">
    <ShoppingCart  />
   {selectedtools.length !=0 && <div className='bg-red-600 text-white w-4 h-4 font-bold text-[12px] flex items-center justify-center rounded-full relative bottom-2.5 right-8'> {selectedtools.length}</div>}
    <a href="">Login</a>
    <button className="btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">Get Started</button>
  </div>

</div>


    );
};

export default Navbar
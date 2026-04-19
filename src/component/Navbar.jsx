import React from 'react';
import { ShoppingCart, MoreHorizontal } from "lucide-react";

const Navbar = ({ selectedtools }) => {
  return (
    <div className="navbar bg-base-100 container mx-auto w-[85%]">

      {/* Left */}
      <div className="navbar-start">
        <h2 className="text-[25px] md:text-[40px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">
          DigiTools
        </h2>
      </div>

      {/* Center (Desktop links) */}
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
      <div className="navbar-end flex items-center gap-5 font-semibold">

        {/* Cart */}
        <div className="relative">
          <ShoppingCart />
          {selectedtools.length !== 0 && (
            <div className="bg-red-600 text-white w-4 h-4 text-[12px] flex items-center justify-center rounded-full absolute -top-2 -right-2">
              {selectedtools.length}
            </div>
          )}
        </div>

        {/* Desktop buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <a href="">Login</a>
          <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">
            Get Started
          </button>
        </div>

        {/* Mobile (… menu with everything) */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <MoreHorizontal />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 font-semibold space-y-1"
          >
            {/* Links */}
            <li><button>Products</button></li>
            <li><button>Features</button></li>
            <li><button>Pricing</button></li>
            <li><button>Testimonials</button></li>
            <li><button>FAQ</button></li>

            <div className="divider my-1"></div>

            {/* Auth */}
            <li><a>Login</a></li>
            <li>
              <button className="btn btn-sm bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full">
                Get Started
              </button>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
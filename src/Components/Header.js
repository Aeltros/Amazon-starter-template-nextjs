import React from 'react';
import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';


const Header = () => {
  return (
    <header>

      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0' >
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        {/* Search */}
        <div className='hidden sm:flex  items-center h-10 rounded-md  flex-grow cursor-pointer  bg-yellow-400 hover:bg-green-500'>
          <input className="p-2 w-6 flex-grow  h-10 rounded-l-md  focus:outline-none   flex-shrink" type="text" placeholder='Search Items' />
          <SearchIcon className='h-12 p-4' />
        </div>
        {/* right */}
        <div className='text-white flex items-center text-xs space-x-6 mx-6  whitespace-nowrap'>

          <div className='link'>
            <p className='font-extrabold md:text-xs cursor-pointer'>Hello Account Holder</p>
            <p className='font-extrabold md:text-xs cursor-pointer'>Accounts&Lists</p>
          </div>

          <div className='link'>
            <p className='font-extrabold md:text-xs cursor-pointer'>Returns</p>
            <p className='font-extrabold md:text-xs cursor-pointer'>&Orders</p>

          </div>
          <div className='link relative flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 text-centerrounded-full text-black font-bold bg-yellow-400 '>4</span>
            <ShoppingCartIcon className='h-10'
            />
            <p className=' hidden md:inline-flex font-extrabold md:text-xs cursor-pointer'>Cart</p>
          </div>
        </div>
      </div>
      {/* bottom nav */}

      <div className=' space-x-3 p-2 pl-6 cursor-pointer flex items-center bg-amazon_blue-light text-sm text-white'>
   
      <p>
      <MenuIcon className=' link h-6 mr-4 items-center'/>
      All
      </p>
      {/* Mobile view */}
      <p className='link'>Prime Video</p>
      <p className='link'>Amazon Business</p>
      <p className='link'>Today's </p>
      <p className='link'>Billionaires Club</p>
      <p className='link hidden lg:inline-flex'>Electronics</p>
      <p className='link hidden lg:inline-flex'>Food &Grocery</p>
      <p className='link hidden lg:inline-flex'>Prime</p>
      <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
      <p className='link hidden lg:inline-flex'>Health and Personal</p>
      <p className='link hidden lg:inline-flex'>Games</p>


   
      </div>
    </header>
  )
}

export default Header

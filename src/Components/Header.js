import React from 'react';
import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { useSession, signIn, signOut } from "next-auth/react"
import {useRouter} from "next/router"
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";


const Header = () => {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const date = new Date;
  let hours = date.getHours();
  let Greetings = (hours < 11)? " Good Morning" :
               ((hours <= 18 && hours >= 6 ) ? "Good Afternoon" : " Good Evening");
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50">

      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0' >
          <Image onClick={()=>router.push('/')}
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


        {/* right//Log in below */}
        <div className="flex items-center text-xs text-white space-x-6 mx-6 whitespace-nowrap">
        <div onClick={!session ?signIn:signOut} 
        className='cursor-pointer link'>
            <p className=' hover:underline  '>
            {session ? ` ${Greetings}, ${session.user.name}` :' sign in for exclusive deals'}
            </p>
            <p className='font-extrabold md:text-xs cursor-pointer'>Accounts&Lists</p>
            </div>
            <div
            onClick={() => session && router.push("/orders")}
            className="cursor-pointer link"
          >
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div   
            
            className="relative   hidden sm:flex items-center cursor-pointer link  "
            onClick={() => router.push("/Checkout")}

          >
            <p className="absolute top-0 right-4 md:right-10 h-4 w-4  bg-yellow-400  rounded-full  text-black font-bold link ">
              {items.length}
            </p>

            <ShoppingCartIcon className="h-12   hidden sm:flex   rounded-md  flex-grow cursor-pointer  link   " 

              
            />
            <p className="        hidden md:flex font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>



        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" /> All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
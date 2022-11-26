import React from 'react'
import Image from "next/Image";
import { useState } from "react"
import { StarIcon } from '@heroicons/react/solid';
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice"


// How do we render products===Thats what this page is doing
function Product({ id, price, title, description, image, category}) {

    // Random Rating
    const Max_Rating = 5;
    const Min_Rating = 1;
    const [rating] = useState(
        Math.floor(Math.random() * (Max_Rating - Min_Rating + 1)));

    const [hasPrime] = useState((Math.random() < 0.5));
    const dispatch = useDispatch();

    const addItemToCart = () => {

        const product = {
            id, price, title, description, image, category,hasPrime,rating
        };
        // sending product to cart slice(redux store)
        dispatch(addToCart(product))
    };


    return (
        <div>
            <p>{category}</p>
            <img src={image} height={200} width={200} objectFit="contain" />
            <h4>{title}</h4>
            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) =>
                        <StarIcon className="h-4 bg-yellow-300 " />
                    )}
            </div>
            <div className="text-xs my-2  ">
                <div className='line-clamp-3'>{description}</div>
                <div className="text-xs my-2  text-center " > <Currency quantity=  {price} currency="usd" /> 
{/*        
                   <div className="text-xs my-2 "> Onsale    <Currency quantity={price * 0.8} currency="ETB" /> አሁን ቅናሽ ብቻ</div> */}
                </div>
            </div>

        <div>
        {(hasPrime) &&
                <div className=" items-center space-x-2 -mt-5"  >
                    <img className="w-10 align-middle" src={" https://links.papareact.com/fdw"} height={30} width={50} />
                    <p className="text-xs text-blue-600 ">Free Next Day Delivery</p>
                </div>
            }

        </div>
       

            {/* Add to cart button */}
            <button onClick={addItemToCart} className="
            p-2 text-xs md:text-sm
             bg-gradient-to-b from-yellow-400 to-yellow-200
              border-yellow-300 rounded-sm focus:outline-none 
              focus:ring-2 focus:ring-yellow-500 active:from-yellow-200
               cursor-pointer  bg-yellow-400 hover:bg-green-500"
            > Add to Cart</button>
        </div >


    )
}

export default Product

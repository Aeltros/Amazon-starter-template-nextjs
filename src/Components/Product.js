// import React from 'react'
import Image from "next/Image";
import { useState } from "react"
import { StarIcon } from '@heroicons/react/solid';
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux";
import {addToBasket} from "../slices/basketSlice"

function Product({ id, price, title, description, image, category }) {

    // Random Rating
    const Max_Rating = 5;
    const Min_Rating = 1;
    const [rating] = useState(
        Math.floor(Math.random() * (Max_Rating - Min_Rating + 1)));

    const [hasPrime] = useState((Math.random() < 0.5));
    const dispatch= useDispatch();

        const addItemToBasket =()=>{

const product={
    id, price, title, description, image, category
};
// sending product as an action to the REDUX store/basket slice
dispatch(addToBasket(product))
        };


    return (
        <div>
            <p>{category}</p>
            <img src={image} height={200} width={200} objectFit="contain" />
            <h4 className="bg-red-200">{title}</h4>
            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) =>
                        <StarIcon className="h-4 bg-yellow-300 " />
                    )}
            </div>
            <div className="text-xs my-2 line-clamp-2">
                <p >{description}</p>
                <div className="text-xs my-2 line-clamp-2" ><Currency quantity={price} currency="ETB" /> </div>
                <div className="text-xs my-2 line-through bg-blend-color-burn"> <Currency quantity={price * 0.8} currency="ETB" /> አሁን ቅናሽ ብቻ</div>
            
            </div>
            {/* delivery*/}
                {(price > 100 || hasPrime) && <div className="flex items-center space-x-2 -mt-5"  >
            
                        <img className="w-12" src={" https://links.papareact.com/fdw"} height={50} width={50} />
                        <p className="text-xs text-blue-600 ">Free Next Day Delivery</p>
                    
                </div>
                }
            {/* Add to cart button */}
            <button onClick={addItemToBasket} className="
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

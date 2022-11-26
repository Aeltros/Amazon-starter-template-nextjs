import React from 'react'
import Header from '../Components/Header'
import Image from "next/image";
import { useSelector } from 'react-redux';
import { selectItems,selectTotal } from '../slices/cartSlice';
import CheckoutProduct from '../Components/CheckoutProduct';
import { useSession } from "next-auth/react"
import Currency from "react-currency-formatter"
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
const stripePromise=loadStripe( process.env.stripe_public_key );
                    //  pass in public key


console.log(stripePromise)
console.log("hello Check out JS")


function CheckOut() {
    const items= useSelector(selectItems);
    const total = useSelector(selectTotal);
    const { data: session } = useSession();


// STRIPE CHECKOUT
    const createCheckoutSession =async() => {

   const stripe = await  stripePromise;
// Call the backend to create a check out session
const CheckoutSession = await axios.post('/api/create-checkout-session',
{
  items:items,
  email:session.user.email
  
})
// redirect user to stripe checkout 
const result=await stripe.redirectToCheckout
({
sessionid:CheckoutSession.data.id

})
if (result.error)alert(result.error.message);

};
  return (
    <div className="bg-gray-100">
    <Header />

    <main className="lg:flex max-w-screen-2xl mx-auto">
      {/* Left */}
      <div className="flex-grow m-5 shadow-sm">
        <Image
          src="https://links.papareact.com/ikj"
          width={1020}
          height={250}
          objectFit="contain"
        />
         <div className="flex flex-col p-5 space-y-10 bg-white">
         <h1 className='text-3xl border-b pb-4 text-black '>Hello Shopping Cart</h1>

           <h1 className="text-3xl border-b pb-4">
            {items.length === 0
              ? "Your Amazon Cart is empty."
              : "Shopping Cart"}
          </h1> 

           {items.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              hasPrime={item.hasPrime}
            />
          ))} 
        </div> 
      </div>

      {/* Right */}
       <div className="flex flex-col bg-blue shadow-sm p-10">
        {items.length > 0 && (
          <div>
            <h2 className="whitespace-nowrap bg-blue-500">
              Subtotal ({items.length} items):{" "}
              <span className="font-bold">
                <Currency quantity={total} currency="ETB" />
              </span>

                    




            </h2>
            <button
              disabled={!session}
               onClick={createCheckoutSession}
              
              className={`button mt-2 ${
                !session &&
                "from-gray-200 to-gray-500 border-gray-200 text-black-300 cursor-not-allowed"
              }`}
            >
              {!session ? "Please Sign in or Sign Up for Check out" : "Proceed to Checkout"}
            </button>
          </div>
        )}



      </div> 
    </main>
  </div>
);
}

export default CheckOut;


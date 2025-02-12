import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

function CheckoutProduct({ id,title,price,rating,description,category,image,hasPrime
}) {

  const product={id,title,price,rating,description,category,image,hasPrime}
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(addToCart({id,title,price,rating,description,category,image,hasPrime
    })
    );
  };

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));
  };

console.log(id)

  return (
    <div className="grid grid-cols-5">
      <img src={image} height={200} width={200} objectFit="contain" />

      {/* middle section */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
{Array(rating).fill() .map((_, i) => (
              <StarIcon key={i} className="h-12 text-yellow-500 w-4" />
            ))}
        </div>
        <p className="text-xs mt-2 mb-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="usd" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right add/remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToCart}>
          Add to Cart
        </button>
        <button className="button" onClick={removeItemFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
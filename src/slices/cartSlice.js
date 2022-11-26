import { createSlice } from "@reduxjs/toolkit";


// global items variable
const initialState = {
  items: [],
};
// Total
// const items= useSelector(selectItems);





export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Actions
    addToCart: (state, action) => {

state.items=[...state.items,action.payload]

    },
    removeFromCart: (state, action) => {
      // find the index and search by id
      // check if the id matches the payload action id
const index=state.items.findIndex(cartItem=> cartItem.id === action.payload.id)


// once found
let newCart=[...state.items]
if(index>=0){
// found==>remove
newCart.splice(index, 1)
}
else{
  console.warn(`Cannot remove product (id: ${action.payload.id}) as it is not in the cart`);
}

state.items=newCart

    },

// if found
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
// strings 
export const selectItems = (state) => state.cart.items;

// Total shortcut
export const selectTotal=(state) => 
state.cart.items.reduce((total, item) =>total + item.price,0)

export default cartSlice.reducer;

import {createSlice} from  'react-redux';;

 createSlice({
   name: "cart",
   intialState: {
     items: [],
     totalQuantity: 0,
   },
   reducers: {
     addItemToCart(state, action) {
       const newItem = action.payload;
       const existingItem = state.items.find(item=> item.id=== newItem.id);
       if (existingItem) {
         state.items.push({
           itemId: newItem.id,
           price: newItem.price,
           quantity: 1,
           totalPrice: newItem.price,
           name: newItem.title,
         });
       } else {
         existingItem.quantit++;
         existingItem.totalPrice = existingItem.totalPrice + newItem.price;
       }
     },
     removeItemFromCart() {},
   },
 });


// export const uiActions=uiSlice.actions;
// export default uiSlice;
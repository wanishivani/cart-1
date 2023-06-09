import {createSlice} from  '@reduxjs/toolkit';

const uiSlice= createSlice({
name:'ui',
intialState : {cartIsVisible:false

},
reducers:{
    toogle(state
    ){
       state.cartIsVisible= !state.cartIsVisible
    }

}



 


})


export const uiActions=uiSlice.actions;
export default uiSlice;
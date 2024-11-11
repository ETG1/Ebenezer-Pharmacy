import { ProductData } from "@/type";
import { createSlice } from "@reduxjs/toolkit";


interface UserInfo {
    id: string;
    name: string;
    email: string;
}

interface InitialState {
    cart: ProductData[],
    wishList: ProductData[],
    userInfo: UserInfo | null
}

const initialState: InitialState = {
    cart: [],
    wishList: [],
    userInfo: null,
};

export const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            const existingProduct = state.cart.find((item) => item._id === action.payload._id);
            if(existingProduct) {
                existingProduct.quantity += 1;
            }else{
                state.cart.push(action.payload);
            }
        },
        addQuantity: (state, action) => {
            const existingProduct = state.cart.find((item) => item._id === action.payload);
            if(existingProduct) {
                existingProduct.quantity += 1;
            }
        },
        minusQuantity: (state, action) => {
            const existingProduct = state.cart.find((item) => item._id === action.payload);
            if(existingProduct) {
                existingProduct.quantity -= 1;
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item._id !== action.payload);
        },
        resetCart: (state) => {
            state.cart = [];
        },
        addToWishList: (state, action) => {
            const existingProduct = state.wishList.find((item) => item._id === action.payload._id);
            state.cart.push(action.payload)
        },
        resetWishList: (state) => {
            state.cart = [];
        },
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
    },
});

export const {addtocart, removeFromCart, resetCart, addQuantity, minusQuantity, addToWishList, resetWishList, addUser, removeUser} = shopSlice.actions;
export default shopSlice.reducer;
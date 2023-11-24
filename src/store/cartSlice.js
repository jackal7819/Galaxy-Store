import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500,
	tax: 0,
	orderTotal: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			const { product } = action.payload;
			const item = state.cartItems.find(
				(item) => item.cartID === product.cartID
			);
			if (item) {
				item.quantity += product.quantity;
			} else {
				state.cartItems.push(product);
			}
			state.numItemsInCart += product.quantity;
			state.cartTotal = product.price * product.quantity;
			state.tax = state.cartTotal * 0.2;
			state.orderTotal = state.cartTotal + state.shipping + state.tax;
			localStorage.setItem('cart', JSON.stringify(state));
			const capitalizedTitle = product.title.replace(/\b\w/g, (match) =>
				match.toUpperCase()
			);
			toast.success(`${capitalizedTitle} added to cart`);
		},
		clearCart: (state) => {
			console.log(state);
		},
		removeItem: (state, action) => {
			console.log(action.payload);
		},
		editItem: (state, action) => {
			console.log(action.payload);
		},
	},
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;

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

const getCartFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('cart')) || initialState;
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: getCartFromLocalStorage(),
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

			cartSlice.caseReducers.calculateTotal(state);

			const capitalizedTitle = product.title.replace(/\b\w/g, (match) =>
				match.toUpperCase()
			);
			toast.success(`${capitalizedTitle} added to cart`);
		},
		clearCart: () => {
			localStorage.setItem('cart', JSON.stringify(initialState));
			return initialState;
		},
		removeItem: (state, action) => {
			const { cartID } = action.payload;
			const product = state.cartItems.find(
				(item) => item.cartID === cartID
			);
			state.cartItems = state.cartItems.filter(
				(item) => item.cartID !== cartID
			);
			state.numItemsInCart -= product.quantity;
			state.cartTotal -= product.price * product.quantity;
			cartSlice.caseReducers.calculateTotal(state);

			const capitalizedTitle = product.title.replace(/\b\w/g, (match) =>
				match.toUpperCase()
			);
			toast.error(`${capitalizedTitle} removed from cart`);
		},
		editItem: (state, action) => {
			const { cartID, quantity } = action.payload;
			const product = state.cartItems.find(
				(item) => item.cartID === cartID
			);
			state.numItemsInCart += quantity - product.quantity;
			state.cartTotal += product.price * (quantity - product.quantity);
			product.quantity = quantity;
			cartSlice.caseReducers.calculateTotal(state);
			toast.success('Cart updated');
		},
		calculateTotal: (state) => {
			state.tax = state.cartTotal * 0.2;
			state.orderTotal = state.cartTotal + state.shipping + state.tax;
			localStorage.setItem('cart', JSON.stringify(state));
		},
	},
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;

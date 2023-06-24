import { createSlice } from '@reduxjs/toolkit';

export const cartInitialState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: cartInitialState,
	reducers: {
		add: (state, action) => {
			const newProduct = action.payload.product;

			const productExists = state.items.find(
				(product) => product.id === newProduct.id
			);

			if (!productExists) {
				state.items.push(newProduct);
			}
		},
		remove: (state, action) => {
			const id = action.payload.productId;

			state.items = state.items.filter((product) => product.id !== id);
		},
		clear: (state) => {
			state.items = [];
		},
	},
});

export const { add, clear, remove } = cartSlice.actions;

export const counterReducer = cartSlice.reducer;

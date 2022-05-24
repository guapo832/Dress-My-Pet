import { Constants } from './Constants';

export const addToCart = (cart) => ({
	type: Constants.ADD_TO_CART,
	cart,
});

export const emptyCart = () => ({
	type: Constants.EMPTY_CART
});

export const setCart = (cart) => ({
	type: Constants.SET_CART,
	cart
});


import {  commerce } from  '../../lib/commerce';


const addToCart = async (productId, quantity, variantId) => {
	try {

		let data = null;
        
		if(variantId) {
			data= await commerce.cart.add(productId, quantity, variantId );	
		} else {
			data = await commerce.cart.add(productId, quantity);
		}
		
		return data.cart;
	} catch(e) {
		console.error(e);
	}
};

const fetchCart = async () => {
	try {
		const cart = await commerce.cart.retrieve();
		return cart;
	} catch(e) {
		console.error(e);
	}
};

export { addToCart, fetchCart };

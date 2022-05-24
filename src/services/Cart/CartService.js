import {  commerce } from  '../../lib/commerce';


const addToCart = async (productId, quantity) => {
	try {
        
		const data = await commerce.cart.add('prod_kpnNwA1AW9wmXB', 1 );
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

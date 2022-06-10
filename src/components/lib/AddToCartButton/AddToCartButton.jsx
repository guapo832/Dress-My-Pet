import React from 'react';
import { Button } from '../';
import {useCartStore} from '../../../contexts/Cart/CartStoreProvider';
import { addToCart as addToCartAction } from '../../../contexts/Cart/CartActions';
import { addToCart } from '../../../services/Cart/CartService';


function AddToCartButton({productId, quantity, variantId}) {

	const [ {cart} , dispatch] = useCartStore();

	const handleAddToCart = async () => {
		try {
			let newCart = {};
			if(variantId) {
				newCart = await addToCart(productId, quantity, variantId);
			}
				
			else  {
				newCart = await addToCart(productId, quantity);
			}

			dispatch(addToCartAction(newCart));

		} catch( e) {
			console.error(e);
		}
		
		
	};


	return (
		<Button onClick={handleAddToCart}>
      Add To Cart
		</Button>
	);
}

export default AddToCartButton;

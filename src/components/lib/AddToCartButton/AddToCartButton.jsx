import React from 'react';
import { Button } from '../';

function AddToCartButton() {

	const addToCart = () => {
		console.log('added to cart');
	};


	return (
		<Button onClick={addToCart}>
      Add To Cart
		</Button>
	);
}

export default AddToCartButton;

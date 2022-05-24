import React from 'react';

import { IconButton } from '@material-ui/core';
import { AddShoppingCart} from '@material-ui/icons';
import { ImageLink } from '../../lib';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../../contexts/Cart/CartStoreProvider';
import { addToCart as addToCartAction } from '../../../contexts/Cart/CartActions';
import { addToCart } from '../../../services/Cart/CartService';

import './styles.scss';

const ProductCard = ({product}) => {
	const {assets} = product;

	const [{cart}, dispatch] = useCartStore();

	const handleAddToCart = async (e) => {
		const newCart = await addToCart(cart.id, 1);
		dispatch(addToCartAction(newCart));
	};



	return (
		<div className="product-card">    
			<div className="media">
				{ assets.length && <ImageLink src={ assets[0].url } alt={'test alt'} className="card-image" /> }
			</div>
     
			<div className="card-content">
				<h5 className="title">{product.name}</h5>
				<div className='description' dangerouslySetInnerHTML={{__html: product.description}} />
			</div>
			<div className="card-actions">
				<div>
					<Link to={`/products/${product.id}`}>details</Link>
				</div>
				<div>
					<IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
						<AddShoppingCart />
					</IconButton>
				</div>
      
			</div>
		</div>
	);
};

export default ProductCard;

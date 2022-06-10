import React from 'react';

import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { AddShoppingCart} from '@material-ui/icons';
import { ImageLink } from '../../lib';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../../contexts/Cart/CartStoreProvider';
import { addToCart as addToCartAction } from '../../../contexts/Cart/CartActions';
import { addToCart } from '../../../services/Cart/CartService';

import './ProductCard.styles.scss';

const ProductCard = ({product}) => {
	const {assets, id} = product;

	const [ , dispatch] = useCartStore();

	const handleAddToCart = async () => {
		const newCart = await addToCart(id, 1);
		dispatch(addToCartAction(newCart));
	};



	return (
		<div className="product-card">    
			<div className="media">
				{ assets.length && <Link to={`/products/${product.id}`}><ImageLink src={ assets[0].url } alt={'test alt'} className="card-image" /></Link> }
			</div>
     
			<div className="card-content">
				<h5 className="title">{product.name}</h5>
				<div className='description' dangerouslySetInnerHTML={{__html: product.description}} />
			</div>
			<div className="card-actions">
				<div className="price">
					<span className="no-discount-price">{product.price.formatted_with_symbol}</span>
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

ProductCard.propTypes = {
	product: PropTypes.exact({
		description: PropTypes.string,
		name: PropTypes.string,
		id: PropTypes.string,
		assets: PropTypes.arrayOf(
			PropTypes.shape(
				{
					url: PropTypes.string
				}
			)
		)
	})
};

export default ProductCard;

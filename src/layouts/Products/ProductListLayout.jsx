import React from 'react';
import { Products } from '../../components';

import './ProductListLayout.styles.scss';

function ProductListLayout() {

 
	return (
		<div className="product-list-layout">
			{
				<Products></Products>
			}
		</div>
	);
}

export default ProductListLayout;

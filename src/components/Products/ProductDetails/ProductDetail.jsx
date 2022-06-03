import React from 'react';
import { ImageSelector} from '../../lib';
import { useProductStore } from '../../../contexts/Product/StoreProvider';
import  AddToCartButton  from '../../../components/lib/AddToCartButton/AddToCartButton';
import './ProductDetail.styles.scss';
import SizeSelector from './VariantGroups/Size/SizeSelector';

function ProductDetail() {

	console.log(useProductStore);

	const [{product}] = useProductStore();

	const {variant_groups} = product || [];

	const sizeVariant = variant_groups && variant_groups.find((itm) => (itm.name === 'Size'));

	const sizeOptions = sizeVariant ? sizeVariant.options : [];

	if(product){
		return(
			<div className="product-detali">
				<section className="left-container">
					<div className="content">
						<ImageSelector images={product.assets} />
						<div className="product-description">
              about this product
						</div>
					</div>
				</section>

				<div className="right-container">
					<div className="product-caddy">
						<div className="product-caddy-section">
							<h2>
								{product.name}
							</h2>
							<div className="price">
								{product.price && product.price.formatted_with_symbol}
							</div>
							<AddToCartButton />
						</div>
						<div className="product-caddy-section">
							<div className="product-variants">
								<div className="size-selection">
									<SizeSelector sizeOptions={sizeOptions} />
								</div>
							</div>
						</div>

						<div className="product-caddy-section">
							<div className="product-shipping-info">
                shipping info here
							</div>
						</div>

					</div>
				</div>
       
			</div>);
	} else {
		return  '';
	}
}

export default ProductDetail;

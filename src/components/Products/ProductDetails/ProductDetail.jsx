import React, { useEffect, useState } from 'react';
import { ImageSelector} from '../../lib';
import { useProductStore } from '../../../contexts/Product/StoreProvider';
import { useVariantStore } from '../../../contexts/Product/Variant/StoreProvider';
import  AddToCartButton  from '../../../components/lib/AddToCartButton/AddToCartButton';
import VariantSelector from './VariantSelector/VariantSelector';
import './ProductDetail.styles.scss';

function ProductDetail() {

	

    const [assets, setAssets] = useState([]);
	const [ price, setPrice] = useState();
	const [ selectedVariantId, setSelectedVariantId] = useState();
	const [ selectedVariant, setSelectedVariant] = useState();

	const [{product, selectedOptions}] = useProductStore();
	const {state: variantState, getters} = useVariantStore();

	
	useEffect(() =>{
		if(variantState.variants && variantState.variants.length > 0) {
			let variant = getters.getVariantById(selectedVariantId);
			if(variant) {
				setPrice(getPrice(variant, product));
				if(variant.assets.length > 0) {
					setAssets(variant.assets);
				} else {
					setAssets(product.assets);
				}	
			} else {
				setPrice(getPrice(variant, product));
				setAssets(product.assets || [])
			}
		} else {
			setPrice(getPrice(null, product));
		}
		
	}, [selectedVariantId, product]);

	useEffect(() => {
		if(variantState.variants && variantState.variants.length > 0) {
			let selectedVariant = getters.getVariantByOption(selectedOptions);
			if (selectedVariant) {
				setSelectedVariant(selectedVariant);
				setSelectedVariantId(selectedVariant.id);
			}
		}
		
	}, [selectedOptions]);

	const getPrice = (variant, product) => {
		if(!variant || !variant.price) {
			return product.price ?  product.price : {};
		}

		return variant.price || {};
	}

	if(product && product.id !== 0){
		return(
			<div className="product-detali">
					<section className="left-container">
						<div className="content">
							<ImageSelector images={assets} />
							<div className="product-description">
							<h2>
								About this product
							</h2>
							<div className='description' dangerouslySetInnerHTML={{__html: product.description}} />
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
									{price && price.formatted_with_symbol}
								</div>
								<AddToCartButton productId={product.id} variantId={selectedVariantId} />
							</div>
							<div className="product-caddy-section">
									<VariantSelector product={product} selected={selectedVariant}></VariantSelector>
							</div>

						</div>
					</div>
		
				</div>);
	} else {
		return  <div>...loading</div>;
	}
}

export default ProductDetail;

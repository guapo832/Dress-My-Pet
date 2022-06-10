import React from 'react';
import ContentLayout from '../layouts/ContentLayout/ContentLayout';
import { useParams } from 'react-router-dom';
import { ProductDetail } from '../components';
import { VariantStoreProvider } from '../contexts/Product/Variant/StoreProvider';
import { ProductStoreProvider } from '../contexts/Product/StoreProvider';


function Product() {

	const { id } = useParams();
	return (
		<ContentLayout>
			{
				<ProductStoreProvider productId={id}>
					<VariantStoreProvider productId={id}>
						<ProductDetail />
					</VariantStoreProvider>
					
				</ProductStoreProvider>

			}
		</ContentLayout>
	);
}

export default Product;

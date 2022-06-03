import {  commerce } from  '../../lib/commerce';


const fetchProducts = async () => {
	const { data } = await commerce.products.list();
	return (data);
};

const fetchProduct = async (id) => {
	
	const product = await commerce.products.retrieve(id,);

	return product;
};

const fetchVariant = async(productId, variantId) => {
	const variant = await commerce.products.getVariant(productId, variantId);
	return variant;
};

export { fetchProducts, fetchProduct, fetchVariant };


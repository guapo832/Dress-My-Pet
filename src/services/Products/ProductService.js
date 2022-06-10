import {  commerce } from  '../../lib/commerce';


const fetchProducts = async () => {
	const { data } = await commerce.products.list();
	return (data);
};

const fetchProduct = async (id) => {
	
	const product = await commerce.products.retrieve(id,);

	return product;
};

const fetchVariant = async(variantId) => {
	const variant = await commerce.products.getVariant(variantId);
	return variant;
};

const fetchVariants = async(productId) => {
	const variants = await commerce.products.getVariants(productId);
	return variants;
}

export { fetchProducts, fetchProduct, fetchVariant, fetchVariants };


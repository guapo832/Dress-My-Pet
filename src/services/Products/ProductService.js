import {  commerce } from  '../../lib/commerce';


const fetchProducts = async () => {
	const { data } = await commerce.products.list();
	return (data);
};

const fetchProduct = async (id) => {
	const product = await commerce.products.retrieve(id);

	return product;
}

export { fetchProducts, fetchProduct };


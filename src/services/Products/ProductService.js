import {  commerce } from  '../../lib/commerce';


const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    return (data);
}

export { fetchProducts }


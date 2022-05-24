import React from 'react';
import ProductCard from './ProductCard'
import { useProductStore } from '../../contexts/ProductList/ProductListStoreProvider'

import "./styles.scss";
import "../../assests/images/278239420_513589940424101_354968525891982853_n.jpg";


const Products = () => {

    const [productStore] = useProductStore();
    const {isLoading, productList}  = productStore;
    
    console.log(productList);
    return(
    <div className='product-list topNav'>
        {
            productList.map(product => <ProductCard key={product.description} product={product}></ProductCard>)
        }            
            
    </div>
    )
}

export default Products;
import React, { useEffect, useState } from 'react';
import { fetchProduct } from '../../../services/Products/ProductService';
import { ImageSelector} from '../../lib';

import './ProductDetail.styles.scss';

function ProductDetail({ id }) {

const [product, setProduct] = useState({assets:[]});

  const getProduct = async (id) => {
    let response = await fetchProduct(id);
      setProduct(response);
    }

  useEffect(() => {
    getProduct(id);
  }, [id]);


  return (
    <div className="product-detali">
      <div className="left-container">
        <ImageSelector images={product.assets || []}></ImageSelector>
      </div>
      <div className="right-container">
        
      </div>
     
    </div>
  )
}

export default ProductDetail

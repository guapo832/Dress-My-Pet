import React from 'react'

import { IconButton } from '@material-ui/core';
import { AddShoppingCart} from '@material-ui/icons';

import "./styles.scss";

const ProductCard = ({product}) => {
  console.log(product)
  return (
   <div className="product-card">
     <div className="media">
       card media here
     </div>
     <div className="card-content">
       {/* <h5 className="title">{product.name}</h5> */}
       {/* <div className='description' dangerouslySetInnerHTML={{__html: product.description}} /> */}
     </div>
     <div className="card-actions">
       <IconButton aria-label="Add to Cart">
         <AddShoppingCart />
       </IconButton>
     </div>
   </div>
  );
}

export default ProductCard

import React from 'react';
import { ImageSelector} from '../../lib';
import { useProductStore } from '../../../contexts/Product/StoreProvider';
import  AddToCartButton  from '../../../components/lib/AddToCartButton/AddToCartButton';
import './ProductDetail.styles.scss';

function ProductDetail() {

  console.log(useProductStore);

  const [{product}] = useProductStore();
  if(product){
    return(
      <div className="product-detali">
        <section className="left-container">
            <div class="content">
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
            <div class="product-caddy-section">
              <div className="product-variants">
                variant info here
              </div>
            </div>

            <div class="product-caddy-section">
              <div className="product-shipping-info">
                shipping info here
              </div>
            </div>

          </div>
        </div>
       
      </div>)
  } else {
    return  '';
  }
}

export default ProductDetail

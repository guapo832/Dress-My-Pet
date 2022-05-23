import { Products } from '../../components';

import './styles.scss';

function ProductListLayout() {

 
  return (
    <div className="product-list-layout">
      {
         <Products></Products>
      }
    </div>
  )
}

export default ProductListLayout;

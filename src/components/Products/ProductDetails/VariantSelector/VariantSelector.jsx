import React from 'react';
import VariantGroup from './VariantGroup/VariantGroup';
import { useVariantStore } from '../../../../contexts/Product/Variant/StoreProvider';

function VariantSelector({product}) {

    const {variants} = useVariantStore();
    
    if(product && product.variant_groups) {
        return product['variant_groups'].map((grp) => {
             return <VariantGroup key={grp.id} data={grp} variantList={variants}></VariantGroup>
})
    } else {
        return (<div>... loading</div>)
    }
  
}

export default VariantSelector

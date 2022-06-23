import React from 'react';
import VariantGroup from './VariantGroup/VariantGroup';
import { useVariantStore } from '../../../../contexts/Product/Variant/StoreProvider';

function VariantSelector({product, selected}) {

	const {state: variantState, getters} = useVariantStore();
    
    const selectedVariant = selected?  getters.getVariantById(selected.id) : getters.getVariantById(null);
    if(product && product.variant_groups) {
        return product['variant_groups'].map((grp) => {
             return (
             <div key={grp.id} className="variant-selector">
                 <VariantGroup  data={grp} variantList={variantState.variants} selected={selectedVariant}></VariantGroup>
                 <p>{selectedVariant && selectedVariant.description}</p>
             </div>)
})
    } else {
        return (<div>... loading</div>)
    }
  
}

export default VariantSelector

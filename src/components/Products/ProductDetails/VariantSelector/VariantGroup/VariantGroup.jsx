import React from 'react'
import VariantOption from '../VariantOption/VariantOption';
import {productHasVariantWithOptionId} from '../Utilities'

import './VariantGroup.styles.scss';

function VariantGroup({data, variantList}) {

    let groupOptions = data.options.filter((variantOption) => {
        return productHasVariantWithOptionId(data.id, variantOption, variantList)
    })
    .map( variantOption => (<VariantOption groupId={data.id} data={variantOption}></VariantOption>));

    if(groupOptions.length>0)
  return (
    <div className="variant-group">
        <h3>{data.name}</h3>
      
        {
            groupOptions
        }
            </div>
  );

  return '';
}

export default VariantGroup

import React from 'react'
import { Button } from '../../../../lib';
import { useProductStore,  } from '../../../../../contexts/Product/StoreProvider';
import { setSelectedOption } from '../../../../../contexts/Product/actions';

function VariantOption({groupId, data, selected}) {

        const [{product}, dispatch] = useProductStore();
        const displayVariant = () => {
            dispatch(setSelectedOption({ groupId, optionId: data.id}));
        }

        return (
            <div>
             <Button className={selected ? 'selected' : ''} onClick={displayVariant}>{data.name}</Button>
            </div>
          );
}

export default VariantOption

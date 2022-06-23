import React, {useState} from 'react'
import { Button } from '../../../../lib';
import { useProductStore,  } from '../../../../../contexts/Product/StoreProvider';
import { setSelectedOption } from '../../../../../contexts/Product/actions';

function VariantOption({groupId, data, selected}) {
        const [restoreProps, setRestoreProps] = useState({groupId: null, optionId: null});
        const [{product}, dispatch] = useProductStore();
        
        const setVariant = () => {
            dispatch(setSelectedOption({ groupId, optionId: data.id}));
        }
       

        return (
            <div>
             <Button className={selected ? 'selected' : ''} onClick={setVariant}>{data.name}</Button>
            </div>
          );
}

export default VariantOption

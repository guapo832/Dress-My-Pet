import React, { 
	useReducer,
	useEffect,
	useContext
} from 'react';
import { fetchVariants } from '../../../services/Products/ProductService';
import variantReducer, { initialState } from './Reducer';
import { setVariants } from './actions';


const VariantContext = React.createContext();


const initVariants = async (dispatch, productId) => {
	let rtnval = null;
	try {
		rtnval = await fetchVariants(productId);
		dispatch(setVariants(rtnval.data));
	} catch(e) {
		console.error('uh oh',  e);
		return false;
	}

    
	
};

export const useVariantStore = () => (useContext(VariantContext));

export const VariantStoreProvider = ({productId, children}) => {

	let pId = productId;
	console.log(pId);

	const [variants, dispatch] = useReducer(variantReducer, initialState  );

	useEffect(() => {
		console.log('initVariant', productId);
		initVariants(dispatch, productId);
	}, [productId]);

	return (<VariantContext.Provider value={variants}>{children}</VariantContext.Provider>);
};




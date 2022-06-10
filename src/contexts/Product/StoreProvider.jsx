import React, { 
	useReducer,
	useEffect,
	useContext
} from 'react';
import { fetchProduct, fetchVariant } from '../../services/Products/ProductService';
import productReducer, { initialState } from './Reducer';
import { setProduct } from './actions';
import { useQuery } from '../../lib/querystringUtility';

const ProductContext = React.createContext();

const initProduct = async (dispatch, productId) => {
	let rtnval = null;
	try {
			rtnval = await fetchProduct(productId);       
	} catch(e) {
		console.error('uh oh',  e);
	}

    
	dispatch(setProduct(rtnval));
         
};

const initVariant = async (dispatch, variantId) => {
	let rtnval = null;
	try {
			rtnval = await fetchVariant(variantId);       
	} catch(e) {
		console.error('uh oh',  e);
	}

	dispatch(setProduct(rtnval));
};

export const useProductStore = () => (useContext(ProductContext));

export const ProductStoreProvider = ({productId, children}) => {

	const [state, dispatch] = useReducer(productReducer, initialState  );
	const query = useQuery();
	const variantId = query.get("vid");

	useEffect(() => {
		console.log('init', variantId);
		if(variantId) initVariant(dispatch, variantId)
		else initProduct(dispatch, productId)
	}, [variantId, productId]);


	return (<ProductContext.Provider value={[state, dispatch]}>{children}</ProductContext.Provider>);
};




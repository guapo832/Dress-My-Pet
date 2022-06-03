import React, { 
	useReducer,
	useEffect,
	useContext
} from 'react';
import { fetchProducts } from '../../services/Products/ProductService';
import productListReducer, { initialState } from './ProductListReducer';
import { setProducts } from './ProductListActions';
const ProductListContext = React.createContext();

const init = async (dispatch) => {
	let rtnval = null;
	try {
		rtnval = await fetchProducts();
	} catch(e) {
		console.error('uh oh',  e);
	}

    
	dispatch(setProducts(rtnval));
         
};

export const useProductStore = () => (useContext(ProductListContext));

export const ProductListStoreProvider = ({children}) => {

	const [state, dispatch] = useReducer(productListReducer, initialState  );
	const {isLoading} = state;
	console.log(isLoading);
	useEffect(() => {
		init(dispatch);
	}, []);



	return (<ProductListContext.Provider value={[state]}>{children}</ProductListContext.Provider>);
};




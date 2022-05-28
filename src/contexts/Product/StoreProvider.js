import React, { 
    useReducer,
     useEffect,
      useContext
 } from 'react';
import { fetchProduct } from '../../services/Products/ProductService';
import productReducer, { initialState } from './Reducer';
import { setProducts } from './actions';
const ProductContext = React.createContext();

const init = async (dispatch, productId) => {
    let rtnval = null;
    try {
        rtnval = await fetchProduct(productId);
    } catch(e) {
        console.error('uh oh',  e);
    }

    
    dispatch(setProducts(rtnval));
         
}

export const useProductStore = () => (useContext(ProductContext));

export const ProductStoreProvider = ({productId, children}) => {

    const [state, dispatch] = useReducer(productReducer, initialState  );

    useEffect(() => {
        init(dispatch, productId);
    }, [productId]);



    return (<ProductContext.Provider value={[state]}>{children}</ProductContext.Provider>)
}




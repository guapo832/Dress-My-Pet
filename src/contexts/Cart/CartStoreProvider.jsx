import React, { 
    useReducer,
     useEffect,
      useContext
 } from 'react';
import { fetchCart } from '../../services/Cart/CartService';
import CartReducer, { initialState } from './CartReducer';
import { setCart } from './CartActions';
const CartContext = React.createContext();

const init = async (dispatch) => {
    let rtnval = null;
    try {
        rtnval = await fetchCart();
    } catch(e) {
        console.error('uh oh',  e);
    }

    
    dispatch(setCart(rtnval));
         
}

export const useCartStore = () => (useContext(CartContext));

export const CartStoreProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState  );
    
    useEffect(() => {
        init(dispatch);
    }, []);



    return (<CartContext.Provider value={[state, dispatch]}>{children}</CartContext.Provider>)
}




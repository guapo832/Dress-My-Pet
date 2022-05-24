import { Constants } from './Constants';

export const initialState = {
  cart:{}
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type ) {
    
    case Constants.ADD_TO_CART: 
    return {
      ...state,
      cart: {...action.cart}
    }

    case Constants.GET_CART:
        return {
            ...state,
            cart: action.cart
        }
      
    default: return { state }
  }

};

  export default productListReducer;
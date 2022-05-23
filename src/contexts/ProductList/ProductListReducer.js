import { Constants } from './Constants';

export const initialState = {
  isLoading: true,
  productList: []
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type ) {
    
    case Constants.ADD_PRODUCT: 
    return {
      ...state,
      productList: state.productList.concat(action.product)
    }

    case Constants.REFRESH_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        productList: action.payload
      }

      case Constants.SET_ISLOADING:
        return {
          ...state,
          isLoading: action.payload
        }
      
    default: return { state }
  }

};

  export default productListReducer;
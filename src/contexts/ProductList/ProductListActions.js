import { Constants } from './Constants';

export const updateProduct = (product) => ({
    type: Constants.UPDATE_PRODUCT,
    product,
  });

  export const setProducts = (productList) => ({
      type: Constants.REFRESH_PRODUCTS,
      payload: productList
  })

  export const setIsLoading = (isLoading) => ({
      type: Constants.SET_ISLOADING,
      payload: isLoading
  })
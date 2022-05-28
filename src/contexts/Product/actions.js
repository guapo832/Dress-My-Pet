import { Constants } from './Constants'

export const setProducts = (productList) => ({
	type: Constants.LOAD_PRODUCT,
	payload: productList
});

export const setIsLoading = (isLoading) => ({
	type: Constants.SET_ISLOADING,
	payload: isLoading
});

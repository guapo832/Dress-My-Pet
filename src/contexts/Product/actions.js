import { Constants } from './Constants';

export const setProduct = (product) => ({
	type: Constants.LOAD_PRODUCT,
	payload: product
});

export const setVariants = (variants) => ({
	type: Constants.LOAD_VARIANTS,
	payload: variants
});

export const setIsLoading = (isLoading) => ({
	type: Constants.SET_ISLOADING,
	payload: isLoading
});

export const setSelectedOption = (payload) => ({
	type: Constants.SET_SELECTED_OPTION,
	payload: payload
});

import { Constants } from './Constants';

export const setVariants = (variants) => ({
	type: Constants.LOAD_VARIANTS,
	payload: variants
});

export const getVariant = (variants, variantId) => ({
	type: Constants.GET_VARIANT,
	payload: {variants, variantId}
})
import { Constants } from './Constants';

export const setVariants = (variants) => ({
	type: Constants.LOAD_VARIANTS,
	payload: variants
});
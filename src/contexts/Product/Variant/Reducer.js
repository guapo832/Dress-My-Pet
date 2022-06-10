import { Constants } from './Constants';

export const initialState = {
	variants: []
};

export const variantReducer = (state = initialState, action) => {
	switch (action.type ) {
    
	case Constants.LOAD_VARIANTS:
		return {
			...state,
			variants: action.payload
		}
      
	default: return { state };
	}

};

export default variantReducer;
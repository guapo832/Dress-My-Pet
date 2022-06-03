import { Constants } from './Constants';

export const initialState = {
	isLoading: true,
	product: {id:0, assets:[], description: ''}
};

export const productReducer = (state = initialState, action) => {
	switch (action.type ) {
    

	case Constants.LOAD_PRODUCT:
		return {
			...state,
			isLoading: false,
			product: action.payload
		};

	case Constants.SET_ISLOADING:
		return {
			...state,
			isLoading: action.payload
		};
      
	default: return { state };
	}

};

export default productReducer;
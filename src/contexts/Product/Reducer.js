import { Constants } from './Constants';

export const initialState = {
	isLoading: true,
	product: {id:0, assets:[], description: ''},
	variants: [],
	selectedOptions: {}
};

export const productReducer = (state = initialState, action) => {
	switch (action.type ) {
    

	case Constants.LOAD_PRODUCT:
		return {
			...state,
			product: { ...action.payload }
		};
	
	case Constants.LOAD_VARIANTS:
		return {
			...state,
			variants: action.payload
		}

	case Constants.SET_ISLOADING:
		return {
			...state,
			isLoading: action.payload
		};

	case Constants.SET_SELECTED_OPTION:
		let newSelectedOptions = {...state.selectedOptions};
		newSelectedOptions[action.payload.groupId] = action.payload.optionId;

		return {
			...state,
			selectedOptions: {...newSelectedOptions}
		};
      
	default: return { state };
	}

};

export default productReducer;
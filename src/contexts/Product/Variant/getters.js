import {isEqual} from 'lodash';

export const getters = (state) => {
  return {
    getVariantById: (variantId) => {
        if(variantId) {
            return { ...state.variants.find(variant => variant.id === variantId )}
        } else {
            return { ...state.variants[0]};
        }
    },
    getVariantByOption: (options) => ({...state.variants.find(variant => isEqual(variant.options, options))})
  }
}
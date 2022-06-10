export const productHasVariantWithOptionId = (groupId, option, variantList) => {
    if (variantList.length === 0) return false;

    let found = variantList.find( (variant) => 
        {
            return (groupId in variant.options && variant.options[groupId] === option.id)
        }
    );

    console.log(found);
    return found ? true : false;


    
}
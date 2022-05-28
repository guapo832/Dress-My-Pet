import React from 'react'
import { ProductListStoreProvider } from '../contexts/ProductList/ProductListStoreProvider'
import { ProductList } from '../layouts';
import { useProductStore } from '../contexts/ProductList/ProductListStoreProvider'
function Home() {

  const productStore = useProductStore();

  if(productStore && productStore.isLoading) {
    return '...loading';
  }
  return (
    <>
     <ProductListStoreProvider>
         <ProductList />
     </ProductListStoreProvider>
     </>
  
  )
}

export default Home

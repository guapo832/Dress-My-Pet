import React from 'react'
import { ProductListStoreProvider } from '../contexts/ProductList/ProductListStoreProvider'
import { ProductList } from '../layouts';
import { useProductStore } from '../contexts/ProductList/ProductListStoreProvider'
function Home() {

  const productStore = useProductStore();

  return (
    <>
     <ProductListStoreProvider>
         {productStore && productStore.isLoading ? '...loading' :  <ProductList /> }
     </ProductListStoreProvider>
     </>
  
  )
}

export default Home

import React from 'react'
import ContentLayout from '../layouts/ContentLayout';
import { useParams } from 'react-router-dom';
import { ProductDetail } from '../components';

function Product() {

  const { id } = useParams();
  return (
    <ContentLayout>
      <ProductDetail id={id} />
    </ContentLayout>
  )
}

export default Product

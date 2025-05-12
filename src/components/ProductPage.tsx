import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductPage = () => {
  console.log('ProductPage rendered!');

  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
// src/pages/ProductDetail.js
// import productsData from '../data/productsData'; // Assuming you have a productsData file
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../features/products/useProduct';
import ProductBuy from './ProductBuy';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import Loader from './Loader';

const ProductDetail = () => {
  const { product, isLoading } = useProduct();
  console.log(product);

  if (isLoading) return <Loader />;

  return (
    <div className="grid  sm:grid-cols-2 sm:grid-rows-2 md:grid-rows-1 md:grid-cols-[0.7fr_1fr_1fr] justify-center gap-10 my-8">
      <ProductImage image={product.product.imageCover} />
      <ProductInfo name={product.product.name} description={product.product.description} />
      <ProductBuy product={product.product} discount={product.product.discount} price={product.product.price} priceAfterDiscount={product.product.priceAfterDiscount} />
    </div>
  );
};

export default ProductDetail;

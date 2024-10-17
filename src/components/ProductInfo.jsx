import ProductInfoListItem from './ProductInfoList';

function ProductInfo({ name, description }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="font-semibold">{description}</p>
    </div>
  );
}

export default ProductInfo;

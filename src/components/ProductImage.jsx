function ProductImage({ image }) {
  return (
    <div className="flex justify-center sm:col-start-1 sm:col-end-3 md:col-start-auto md:col-end-auto">
      <img src={image} alt="" />
    </div>
  );
}

export default ProductImage;

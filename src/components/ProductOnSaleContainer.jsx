import ItemProductInSale from "./ItemProductInSale";

function ProductOnSaleContainer() {
  return (
    <div className="flex   gap-x-6 over overflow-scroll">
      <ItemProductInSale
        image={"../../public/CategriesPhotos/smart phone.png"}
        price={38.0}
        newPrice={19.0}
        discount={50}
      />
      <ItemProductInSale
        image={"../../public/CategriesPhotos/smart phone.png"}
        price={38.0}
        newPrice={19.0}
        discount={50}
      />
      <ItemProductInSale
        image={"../../public/CategriesPhotos/smart phone.png"}
        price={38.0}
        newPrice={19.0}
        discount={50}
      />
    </div>
  );
}

export default ProductOnSaleContainer;

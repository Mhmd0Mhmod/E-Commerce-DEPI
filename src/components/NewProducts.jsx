import ItemProduct from "./ItemProduct";

function NewProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:flex md:overflow-x-scroll gap-6">
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
    </div>
  );
}

export default NewProducts;

import CartItem from './CartItem';

function ContainerCartItems({ cart }) {
  return (
    <ul className="overflow-y-scroll  max-h-[350px] space-y-6 ">
      {cart.map((product) => (
        <CartItem key={product.id} product={product} image={'../../public/CategriesPhotos/gaming.png'} />
      ))}
    </ul>
  );
}

export default ContainerCartItems;

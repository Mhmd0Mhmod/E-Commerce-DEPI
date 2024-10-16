import CartItem from "./CartItem";

function ContainerCartItems() {
  return (
    <ul className="overflow-y-scroll  max-h-[350px] space-y-6 ">
      <CartItem image={"../../public/CategriesPhotos/gaming.png"} />
      <CartItem image={"../../public/CategriesPhotos/gaming.png"} />
      <CartItem image={"../../public/CategriesPhotos/gaming.png"} />
      <CartItem image={"../../public/CategriesPhotos/gaming.png"} />
      <CartItem image={"../../public/CategriesPhotos/gaming.png"} />
      <CartItem image={"../../public/CategriesPhotos/gaming.png"} />
    </ul>
  );
}

export default ContainerCartItems;

import CartTotal from "./CartTotal";
import ContainerCartItems from "./ContainerCartItems";
import NumCartItem from "./NumCartItem";

function CartContainer() {
  return (
    <div className=" w-[500px]">
      <NumCartItem num={5} />
      <ContainerCartItems />
      <CartTotal />
    </div>
  );
}

export default CartContainer;

import CartOrder from './CartOrder';
CartOrders.defaultProps = {
  type: 'normal',
};
function CartOrders({ type }) {
  const CartOrders = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      color: 'red',
      quantity: 1,
      total: 100,
      stock: true,
    },
    {
      id: 2,
      name: 'Product 2',
      color: 'blue',
      price: 200,
      quantity: 2,
      total: 400,
      stock: true,
    },
    {
      id: 3,
      name: 'Product 3',
      color: 'green',
      price: 300,
      quantity: 3,
      total: 900,
      stock: true,
    },
  ];
  return CartOrders.map((order) => <CartOrder order={order} type={type} key={order.id} />);
}
export default CartOrders;

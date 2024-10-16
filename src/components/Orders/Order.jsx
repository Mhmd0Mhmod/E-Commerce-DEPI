function Order({ order }) {
  return (
    <div className="flex gap-4">
      <div className="flex gap-3 flex-col ">
        <h2>Order Code</h2>
        <span>{order.code}</span>
      </div>
      <div className="flex gap-3 flex-col ">
        <h2>Placed On</h2>
        <span>{order.placedOn}</span>
      </div>
      <div className="flex gap-3 flex-col ">
        <h2>Total</h2>
        <span>{order.total}</span>
      </div>
      <div className="flex gap-3 flex-col ">
        <h2>Delivered</h2>
        <span>{order.delivered}</span>
      </div>
      <div className="flex gap-3 flex-col ">
        <h2>Sent to</h2>
        <span>{order.sentTo}</span>
      </div>
    </div>
  );
}
export default Order;

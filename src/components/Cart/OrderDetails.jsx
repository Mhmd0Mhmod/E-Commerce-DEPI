function OrderDetails() {
  return (
    <>
      <div className="space-y-2 text-gray-500">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <span>$100</span>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <span>$10</span>
        </div>
        <div className="flex justify-between">
          <p>Shipment Cost</p>
          <span>$10</span>
        </div>
      </div>
      <hr className="border" />
      <div className="flex justify-between">
        <p>Grand Total</p>
        <span>$120</span>
      </div>
    </>
  );
}
export default OrderDetails;

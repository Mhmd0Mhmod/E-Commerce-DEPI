export function calculateDiscount(price, discount) {
  return parseInt(price - (discount * price) / 100);
}

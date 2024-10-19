export async function getProducts() {
  try {
    let res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
    let data = await res.json();

    return data;
  } catch (err) {
    throw Error(err.message);
  }
}
export async function getProduct(id) {
  try {
    let res = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`);
    let data = await res.json();

    return data;
  } catch (err) {
    throw Error(err.message);
  }
}

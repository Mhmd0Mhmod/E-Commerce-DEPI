export async function getProducts() {
  try {
    let res = await fetch('https://kartak-gzj5.onrender.com/api/products');
    let data = await res.json();

    return data;
  } catch (err) {
    throw Error(err.message);
  }
}
export async function getProduct(id) {
  try {
    let res = await fetch(`https://kartak-gzj5.onrender.com/api/products/${id}`);
    let data = await res.json();

    return data;
  } catch (err) {
    throw Error(err.message);
  }
}

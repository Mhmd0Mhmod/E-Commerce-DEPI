import axios from 'axios';

export async function getCart() {
  const token = document.cookie.split('=').at(1).split(';').at(0);
  const data = await axios.get(`${import.meta.env.VITE_API_URL}/carts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.data.cart;
}
export async function addToCart(product) {
  const token = document.cookie.split('=').at(1).split(';').at(0);
  const data = await axios.post(`${import.meta.env.VITE_API_URL}/carts`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
export async function removeFromCart(id) {
  const token = document.cookie.split('=').at(1).split(';').at(0);
  const data = await axios.delete(`${import.meta.env.VITE_API_URL}/carts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
export async function updateProductInCart({ product, quantity }) {
  const token = document.cookie.split('=').at(1).split(';').at(0);
  const data = await axios.put(
    `${import.meta.env.VITE_API_URL}/carts/${product}`,
    { quantity },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
}
export async function clearCart() {
  const token = document.cookie.split('=').at(1).split(';').at(0);
  const data = await axios.delete(
    `${import.meta.env.VITE_API_URL}/carts`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
}

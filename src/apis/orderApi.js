import axios from 'axios';

export async function checkOut({ shippingAddress, cartId }) {
  const token = document.cookie.split('=').at(1).split(';').at(0);
  const data = await axios.post(`${import.meta.env.VITE_API_URL}/orders/${cartId}`, shippingAddress, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}

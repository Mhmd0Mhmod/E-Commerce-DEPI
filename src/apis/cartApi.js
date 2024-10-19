import axios from 'axios';

export async function getCart() {
  const data = await axios.get('https://gcm.onrender.com/api/carts', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzEzMDdlNWYwYWFmYzU5ZGNmNmJiYTIiLCJuYW1lIjoibW9oYW1tZWQiLCJyb2xlIjoidXNlciIsImlhdCI6MTcyOTMwMjE4OX0.kS12xJhj0NhD29xlM0P_IK5io0Zp5B3PIs68SKI9w5o`,
    },
  });

  return data.data.cart;
}
export async function addToCart(product) {
  const data = await axios.post('https://gcm.onrender.com/api/carts', product, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzEzMDdlNWYwYWFmYzU5ZGNmNmJiYTIiLCJuYW1lIjoibW9oYW1tZWQiLCJyb2xlIjoidXNlciIsImlhdCI6MTcyOTMwMjE4OX0.kS12xJhj0NhD29xlM0P_IK5io0Zp5B3PIs68SKI9w5o`,
    },
  });

  return data;
}
export async function removeFromCart(id) {
  const data = await axios.delete(`https://gcm.onrender.com/api/carts/${id}`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzEzMDdlNWYwYWFmYzU5ZGNmNmJiYTIiLCJuYW1lIjoibW9oYW1tZWQiLCJyb2xlIjoidXNlciIsImlhdCI6MTcyOTMwMjE4OX0.kS12xJhj0NhD29xlM0P_IK5io0Zp5B3PIs68SKI9w5o`,
    },
  });

  return data;
}
export async function updateProductInCart({ product, quantity }) {
  const data = await axios.put(
    `https://gcm.onrender.com/api/carts/${product}`,
    { quantity },
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzEzMDdlNWYwYWFmYzU5ZGNmNmJiYTIiLCJuYW1lIjoibW9oYW1tZWQiLCJyb2xlIjoidXNlciIsImlhdCI6MTcyOTMwMjE4OX0.kS12xJhj0NhD29xlM0P_IK5io0Zp5B3PIs68SKI9w5o`,
      },
    }
  );

  return data;
}
export async function clearCart() {
  const data = await axios.delete(
    `https://gcm.onrender.com/api/carts`,

    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzEzMDdlNWYwYWFmYzU5ZGNmNmJiYTIiLCJuYW1lIjoibW9oYW1tZWQiLCJyb2xlIjoidXNlciIsImlhdCI6MTcyOTMwMjE4OX0.kS12xJhj0NhD29xlM0P_IK5io0Zp5B3PIs68SKI9w5o`,
      },
    }
  );

  return data;
}

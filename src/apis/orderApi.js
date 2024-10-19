import axios from 'axios';

export async function checkOut(shippingAddress) {
  const data = await axios.post('https://gcm.onrender.com/api/orders/6713b27547e744eaf5044629', shippingAddress, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzEzMDdlNWYwYWFmYzU5ZGNmNmJiYTIiLCJuYW1lIjoibW9oYW1tZWQiLCJyb2xlIjoidXNlciIsImlhdCI6MTcyOTMwMjE4OX0.kS12xJhj0NhD29xlM0P_IK5io0Zp5B3PIs68SKI9w5o`,
    },
  });

  return data;
}

import axios from 'axios';
import toast from 'react-hot-toast';

export async function login(bodyData) {
  try {
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`, bodyData);
    return data;
  } catch (e) {
    toast.error(e.response.data.message);
  }
}

export async function signUp(bodyData) {
  try {
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, bodyData);
    return data;
  } catch (e) {
    toast.error(e.response.data.message);
  }
}

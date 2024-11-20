import axios from 'axios';

const api = axios.create({
  baseURL: 'http://backend-service:5000',
});


interface User {
  id: number;
  name: string;
}

export const getUsers = async() => {
  try {
    const response = await api.get<User[]>('/api/users');

    console.log('users: ', response.data);
  } catch(err) {
    console.log(`Error: ${err}`);
  }
};
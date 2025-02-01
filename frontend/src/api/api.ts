import {USER_LOCALSTORAGE_KEY} from '@/shared/const/localStorage';
import axios from 'axios';

// json-server --watch ./json-server/db.json --port 8000

export const api = axios.create({
  baseURL: __API_URL__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
  }
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
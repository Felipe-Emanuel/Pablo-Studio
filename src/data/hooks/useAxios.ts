import { useState } from 'react';
import api from '../services/api';

export function useAxios() {
  const [dataGet, setDataGet] = useState([])

  const getData = async (path: string, limit?: number) => {
    const req = await api
      .get(`/api/${path}`, {
        params: {
          limit: limit ?? Infinity,
        },
      })
      .then((response) => setDataGet(response.data.images))
      .catch((err) => console.error(err));
    return req;
  };

  return {
    getData,
    dataGet
  }

}

import { useState } from "react";
import api from "../services/api";
import { PrecoPrazoResponse } from "correios-brasil/dist";

export function useAxios() {
  const [dataGet, setDataGet] = useState([]);
  const [dataPost, setDataPost] = useState<PrecoPrazoResponse>()

  const getData = async (path: string, limit?: number) => {
    const req = await api
      .get(`/api/${path}`, {
        params: {
          limit: limit ?? Infinity,
        },
      })
      .then((response) => setDataGet(response.data))
      .catch((err) => console.error("Erro ao GET em getData /useAxios/", err));
    return req;
  };

  const postDate = async (path: string, body: any) => {
    const req = await api
      .post(`/api/${path}`, {
        body,
      })
      .then((response) =>{
        setDataPost(response.data)
        }
      )
      .catch((err) =>
        console.error("Erro ao POST em postData /useAxios/", err)
      );
    return req;
  };

  return {
    getData,
    postDate,
    dataGet,
    dataPost
  };
}

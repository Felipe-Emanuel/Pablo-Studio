import api from "../services/api";
import { useState } from "react";
import { PrecoPrazoResponse } from "correios-brasil/dist";
import { useCartContext } from "./useCartContext";

export function useAxios() {
  const { setIsLoading } = useCartContext();
  const [dataGet, setDataGet] = useState([]);
  const [dataPost, setDataPost] = useState<PrecoPrazoResponse>()

  const getData = async (path: string, limit?: number) => {
    setIsLoading(true);
    const req = await api
      .get(`/api/${path}`, {
        params: {
          limit: limit ?? Infinity,
        },
      })
      const resp = await req.data
      setIsLoading(false);
      setDataGet(resp)

    return req;
  };

  const postDate = async (path: string, body: any) => {
    const req = await api
      .post(`/api/${path}`, {
        body,
      })
      .then((response) => setDataPost(response.data))
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

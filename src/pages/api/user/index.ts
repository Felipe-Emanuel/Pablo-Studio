import { NextApiRequest, NextApiResponse } from "next";
import { user } from "src/userMocked";

export default function handlerUser(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'GET') {
    res.status(200).json( user )
  } else {
    res.status(400).json({ error: 'Rejeitado! A rota só aceita metodos "GET"'})
  }
}

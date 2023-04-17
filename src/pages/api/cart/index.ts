import { NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
import { productMocked } from 'src/productMocked';
import url from 'url';

export default function handler(req: NextRequest, res: NextApiResponse) {
  const { query } = url.parse(req.url, true);

  if (query.mock === 'true') {
    res.status(200).json( productMocked );
  } else {
    res.status(400).json({ error: 'A query "mock" com valor "true" é necessária' });
  }
}

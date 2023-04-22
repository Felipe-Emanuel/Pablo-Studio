import { NextRequest, NextResponse } from "next/server";

const next = require('next');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  require('http').createServer((req: NextRequest, res: NextResponse) => {
    handle(req, res);
  }).listen(3000, (err: any) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});

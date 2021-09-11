import Trouter from "trouter";
import type { NextApiRequest, NextApiResponse } from "next";

function sanitizeParams(params: Record<string, string>) {
  Object.keys(params).forEach((key) => {
    const val = params[key];
    const [actualVal] = val.split("?");
    params[key] = actualVal;
  });
  return params;
}

export type NextRequest = NextApiRequest & { params: Record<string, string> };
export type NextResponse = NextApiResponse;

class NXR<T> extends Trouter<T> {
  async handler(req: NextApiRequest, res: NextApiResponse) {
    const tReq: NextRequest = Object.assign(req, { params: {} });
    const [url] = req.url!.replace("/api", "").split("?");
    const obj = router.find(req.method!.toUpperCase()! as any, url);
    tReq.params = sanitizeParams(obj.params);
    delete req.query.route;
    const [handler] = obj.handlers;
    if (handler) return handler(tReq, res);
    res.status(404).send("API route not found");
  }
}
export type Handler = (
  req: NextRequest,
  res: NextResponse
) => Promise<void> | void;
const router = new NXR<Handler>();
export default router;

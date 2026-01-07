import { Router, Request, Response }  from "express";

const healthRouter = Router();

healthRouter.get('',(_req: Request, res: Response) => {
  console.log("Health check requested");
  res.json({
    status: "ok",
    service: "relay-gateway"
  });
});

export default healthRouter;
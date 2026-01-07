import express, { Request, Response, NextFunction } from 'express';
import healthRoutes from './routes/health';
const app = express();

app.use('/health', healthRoutes);

app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ error: 'Internal Server Error' });
});
export default app;
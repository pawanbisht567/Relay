import app from "./app";
import { env } from "./config/env";
import http from "http";

function startServer() {
  const PORT = env.PORT;
  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`Relay Gateway running on port ${PORT}`);
  });

  const shutdown = () => {
    console.log("Shutting down Relay Gateway...");
    server.close(() => {
      console.log("Server closed gracefully");
      process.exit(0);
    });
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

export default startServer;


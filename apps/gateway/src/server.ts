import app from "./app";
import { env } from "./config/env";
import http from "http";
import { createWebSocketServer } from "./websocket/ws.server";

function startServer() {
  const PORT = env.PORT;
  const server = http.createServer(app);

  const wss = createWebSocketServer(server);

  server.listen(PORT, () => {
    console.log(`Relay Gateway running on port ${PORT}`);
  });



  const shutdown = () => {
    console.log("Shutting down Relay Gateway...");
    server.close(() => {
      console.log("Server closed gracefully...");
      if(wss) {
        wss.close(() => {
          console.log('Websocket closing gracefully...');
        })    
      }
      process.exit(0);
    });
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

export default startServer;


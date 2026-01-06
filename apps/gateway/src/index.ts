import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (_req, res) => {
    console.log("Health check requested");
  res.json({ status: "ok", service: "relay-gateway" });
});

app.listen(PORT, () => {
  console.log(`Relay Gateway running on port ${PORT}`);
});

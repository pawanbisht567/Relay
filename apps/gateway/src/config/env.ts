import "dotenv/config";

export const env = {
  PORT: Number(process.env.PORT) || 4000,
  JWT_SECRET: process.env.JWT_SECRET || "super_secret_key",
  ACCESS_TOKEN_TTL: process.env.ACCESS_TOKEN_TTL || "10m",
  REFRESH_TOKEN_TTL: process.env.REFRESH_TOKEN_TTL || "30d"
};

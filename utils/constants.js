import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const AUTH_USER = process.env.AUTH_USER || "ROHIT";
export const AUTH_PASS = process.env.AUTH_PASS || "1234";

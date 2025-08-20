// server/constants/index.js

// Environment variables
const SERVER_URL = process.env.SERVER_URL || "http://localhost:8000";
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

// Roles
const USER_ROLE = "user";
const ADMIN_ROLE = "admin";

// Other constants (you can add more later)
const DEFAULT_PAGE_SIZE = 10;

module.exports = {
  SERVER_URL,
  CLIENT_URL,
  USER_ROLE,
  ADMIN_ROLE,
  DEFAULT_PAGE_SIZE,
};

// server/constants/index.js

// Environment variables
const SERVER_URL = process.env.SERVER_URL || "https://shopease-md4l.onrender.com/api";
const CLIENT_URL = process.env.CLIENT_URL || "https://shopeaseshop.netlify.app";

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

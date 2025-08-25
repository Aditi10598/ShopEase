// config.js – Admin Configuration

const ENV = import.meta.env.MODE || "development";

const config = {
  development: {
    API_BASE_URL: "http://localhost:8000", // Local backend
    CLIENT_BASE_URL: "http://localhost:5173",  // Local client
    ADMIN_BASE_URL: "http://localhost:5174",   // Local admin
    NODE_ENV: "development",
    DEBUG: true,
    LOG_LEVEL: "debug",
  },
  production: {
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "https://shopease-md4l.onrender.com/api",
    CLIENT_BASE_URL: import.meta.env.VITE_CLIENT_BASE_URL || "https://shopeaseshop.netlify.app",
    ADMIN_BASE_URL: import.meta.env.VITE_ADMIN_BASE_URL || "https://shopeaseshopadmin.netlify.app",
    NODE_ENV: "production",
    DEBUG: false,
    LOG_LEVEL: "error",
  },
};

// Current environment configuration
const currentConfig = config[ENV] || config.development;

// Exported constants
export const {
  API_BASE_URL,
  CLIENT_BASE_URL,
  ADMIN_BASE_URL,
  NODE_ENV,
  DEBUG,
  LOG_LEVEL,
} = currentConfig;

// Legacy support for existing serverUrl imports
export const serverUrl = API_BASE_URL;

// Environment checks
export const isDevelopment = ENV === "development";
export const isProduction = ENV === "production";

// Logger utility
export const logger = {
  debug: (...args) => { if (DEBUG) console.log("[DEBUG]", ...args); },
  info: (...args) => { if (DEBUG || LOG_LEVEL === "info") console.info("[INFO]", ...args); },
  warn: (...args) => console.warn("[WARN]", ...args),
  error: (...args) => console.error("[ERROR]", ...args),
};

export default currentConfig;


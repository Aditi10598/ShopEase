const ENV = import.meta.env.MODE || "development";

// Base URLs for different environments
const config = {
  development: {
    API_BASE_URL: import.meta.env.VITE_BACKEND_URL || "http://localhost:8000",
    CLIENT_BASE_URL: "http://localhost:5173",
    ADMIN_BASE_URL: "http://localhost:5174",
    NODE_ENV: "development",
    DEBUG: true,
  },
  production: {
    API_BASE_URL: import.meta.env.VITE_BACKEND_URL || "https://shopease-md4l.onrender.com/api",
    CLIENT_BASE_URL: import.meta.env.VITE_CLIENT_BASE_URL || "https://shopeaseshop.netlify.app",
    ADMIN_BASE_URL: import.meta.env.VITE_ADMIN_BASE_URL || "https://shopeaseshopadmin.netlify.app",
    NODE_ENV: "production",
    DEBUG: false,
  },
};

// Pick current config based on environment
const currentConfig = config[ENV] || config.development;

// Export constants
export const {
  API_BASE_URL,
  CLIENT_BASE_URL,
  ADMIN_BASE_URL,
  NODE_ENV,
  DEBUG,
} = currentConfig;

// Legacy support for existing imports
export const serverUrl = API_BASE_URL;

// Optional: Logger utility
export const logger = {
  debug: (...args) => { if (DEBUG) console.log("[DEBUG]", ...args); },
  info: (...args) => { if (DEBUG) console.info("[INFO]", ...args); },
  warn: (...args) => console.warn("[WARN]", ...args),
  error: (...args) => console.error("[ERROR]", ...args),
};

export default currentConfig;

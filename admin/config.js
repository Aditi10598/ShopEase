// config.js

const ENV = import.meta.env.MODE || "development";

const config = {
  development: {
    API_BASE_URL: "http://localhost:8000",
    CLIENT_BASE_URL: "http://localhost:5173",
    ADMIN_BASE_URL: "http://localhost:5174",
    NODE_ENV: "development",
    DEBUG: true,
    LOG_LEVEL: "debug",
  },
  production: {
    API_BASE_URL:
      import.meta.env.VITE_API_BASE_URL || "https://your-api-domain.com",
    CLIENT_BASE_URL:
      import.meta.env.VITE_CLIENT_BASE_URL || "https://orebiclient.reactbd.com",
    ADMIN_BASE_URL:
      import.meta.env.VITE_ADMIN_BASE_URL || "https://orebiadmin.reactbd.com",
    NODE_ENV: "production",
    DEBUG: false,
    LOG_LEVEL: "error",
  },
};

export const serverUrl = config[ENV].API_BASE_URL;
export const adminUrl = config[ENV].ADMIN_BASE_URL;
export const clientUrl = config[ENV].CLIENT_BASE_URL;
export const nodeEnv = config[ENV].NODE_ENV;


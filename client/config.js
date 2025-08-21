export const serverUrl = import.meta.env.VITE_BACKEND_URL;

const checkConfig = (server) => {
  let config = {};
  switch (server) {
    case "production":
      config = {
        baseUrl: "https://shopease-md4l.onrender.com",
      };
      break;
    case "local":
      config = {
        baseUrl: "https://shopease-md4l.onrender.com",
      };
      break;
    default:
      break;
  }
  return config;
};

export const selectServer = "local";
export const config = checkConfig(selectServer);

import axios from "axios";
import { serverUrl } from "../../config";

// Create axios instance
const api = axios.create({
  baseURL: serverUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  adminLogin: async (credentials) => {
    try {
      const response = await api.post("/user/admin", credentials);
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Admin login failed",
      };
    }
  },

  userLogin: async (credentials) => {
    try {
      const response = await api.post("/user/login", credentials);
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "User login failed",
      };
    }
  },

  userRegister: async (userData) => {
    try {
      const response = await api.post("/user/register", userData);
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed",
      };
    }
  },

  getUserProfile: async () => {
    try {
      const response = await api.get("/user/profile");
      return response.data;
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Failed to get profile",
      };
    }
  },
};

export default authService;

import express from "express";
const app = express();
import "dotenv/config";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import { readdirSync } from "fs";
import dbConnect from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import detect from "detect-port"; // <-- added

const defaultPort = process.env.PORT || 8000;

const allowedOrigins = [
  process.env.ADMIN_URL,
  process.env.CLIENT_URL,
  "http://localhost:5174",
  "http://localhost:5173",
  "http://localhost:8081",
  "http://10.0.2.2:8081",
  "http://10.0.2.2:8000",
].filter(Boolean);

console.log("Allowed CORS Origins:", allowedOrigins);

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("CORS request from origin:", origin);

      if (!origin) return callback(null, true);

      if (process.env.NODE_ENV === "development") {
        console.log("Development mode: allowing all origins");
        return callback(null, true);
      }

      if (allowedOrigins.indexOf(origin) !== -1) {
        console.log("Origin allowed:", origin);
        callback(null, true);
      } else {
        console.log("Origin blocked:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

dbConnect();
connectCloudinary();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routesPath = path.resolve(__dirname, "./routes");
const routeFiles = readdirSync(routesPath);
routeFiles.map(async (file) => {
  const routeModule = await import(`./routes/${file}`);
  app.use("/", routeModule.default);
});

app.get("/", (req, res) => {
  res.send("You should not be here");
});

// Auto-pick a free port
detect(defaultPort).then((port) => {
  app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`);
    if (port !== defaultPort) {
      console.log(`⚠️ Port ${defaultPort} was busy, switched to ${port}`);
    }
  });
}).catch((err) => {
  console.error("❌ Failed to start server:", err);
});

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import NotesRoute from "./Route/NoteRoute.js";
import UserRoute from "./Route/UserRoute.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Konfigurasi CORS
const allowedOrigins = [
  "http://localhost:3000",
  "https://notes-fe183-dot-f-01-450707.uc.r.appspot.com"
];

app.use(
  cors({
    origin: "https://notes-fe183-dot-e-01-453413.as.r.appspot.com/",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Middleware
app.use(cookieParser());
app.use(express.json());

// ✅ Routing langsung di root
app.use("/api", NotesRoute);
app.use("/api", UserRoute);


// ✅ Health Check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

// ✅ Start Server
app.listen(PORT, () =>
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`)
);

// src/utils/util.js

// Ganti URL Cloud Run kamu sesuai dengan backend yang kamu deploy
const PRODUCTION_API = "https://notes-be183-427042664362.us-central1.run.app/";

// URL untuk backend lokal saat development (pastikan port cocok)
const DEVELOPMENT_API = "http://localhost:5000/api";

// Pilih otomatis berdasarkan mode React (development vs production)
export const BASE_URL =
  process.env.NODE_ENV === "development" ? DEVELOPMENT_API : PRODUCTION_API;


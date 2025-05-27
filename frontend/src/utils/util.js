// src/utils/util.js

const PRODUCTION_API = "https://notes-be183-427042664362.us-central1.run.app/api"; // ✅ tambahkan /api

const DEVELOPMENT_API = "http://localhost:5000/api";

export const BASE_URL =
  process.env.NODE_ENV === "development" ? DEVELOPMENT_API : PRODUCTION_API;

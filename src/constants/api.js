const baseURLTaggin = "https://db82-14-232-166-121.ngrok-free.app";
const baseContentUrl = "https://0a5f-42-112-110-118.ngrok-free.app";
const baseNestUrl = "http://localhost:3000/api/v1";

export const extractItemFromImage =
  baseURLTaggin + "/tagging/extract_from_image";

export const generateContent = baseContentUrl + "/chatbot/process";
export const switchStatus = baseContentUrl + "/chatbot/switch";

//! Authentication
export const loginURL = baseNestUrl + "/auth/login";
export const loginGoogleURL = baseNestUrl + "/auth/google";
export const loginFacebookURL = baseNestUrl + "/auth/facebook";
export const register = baseNestUrl + "/auth/register";

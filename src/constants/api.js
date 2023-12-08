const baseURL = "https://0852-42-112-110-118.ngrok-free.app";
const baseContentUrl = "https://0a5f-42-112-110-118.ngrok-free.app";
const baseNestUrl = "http://localhost:3000/api/v1";

export const extractItemFromImage = baseURL + "/tagging/extract_from_image";

export const generateContent = baseContentUrl + "/chatbot/process";
export const switchStatus = baseContentUrl + "/chatbot/switch";

//! Authentication
export const login = baseNestUrl + "/auth/login";
export const register = baseNestUrl + "/auth/register";

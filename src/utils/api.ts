import { API_BASE_URL } from "@/config/envs";

export const buildApiUrl = (endpoint: string) => `${API_BASE_URL}${endpoint}`;

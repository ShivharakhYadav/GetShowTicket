import { buildApiUrl } from "@/utils/api";

export const apiRoutes = {
  login: buildApiUrl("/api/auth/login"),
  events: buildApiUrl("/api/events"),
};

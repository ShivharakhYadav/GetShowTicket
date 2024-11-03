import { buildApiUrl } from "@/utils/api";

export const apiRoutes = {
  login: buildApiUrl("/api/auth/login"),
  register: buildApiUrl("/api/auth/register"),
  events: buildApiUrl("/api/events"),
};

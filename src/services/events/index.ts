import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";

import { apiRoutes } from "@/config/apiRoutes";
import { QUERY_KEYS } from "@/services/config";

const { events } = apiRoutes;
const fetchEvents = async () => {
  const { data } = await axios.get(events);

  return data;
};

export const useEventsSearchQuery = <T = Event[]>(
  options?: UseQueryOptions<Event[], unknown, T>
) =>
  useQuery<Event[], unknown, T>({
    queryKey: [QUERY_KEYS.EVENTS_QUERY_KEY],
    queryFn: fetchEvents,
    ...options,
  });

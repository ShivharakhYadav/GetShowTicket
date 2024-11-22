import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { apiRoutes } from "@/config/apiRoutes";
import { QUERY_KEYS } from "@/services/config";
import { CustomQueryOptions } from "@/types/query";

import { EventResponse } from "./types";

const { events } = apiRoutes;

const fetchEvents = async () => {
  const { data } = await axios.get<EventResponse>(events);
  return data;
};

export const useEventsSearchQuery = <T = EventResponse>(
  options?: CustomQueryOptions<EventResponse, T>
) =>
  useQuery<EventResponse, unknown, T>({
    queryKey: [QUERY_KEYS.EVENTS_QUERY_KEY],
    queryFn: fetchEvents,
    ...options,
  });

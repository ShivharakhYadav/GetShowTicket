const appRoutes = {
  home: "/",
  events: "/events",
  eventDetails: (eventName: string, id: number) =>
    `/events/${eventName.replaceAll(" ", "-")}/${id}/`,
};

export default appRoutes;

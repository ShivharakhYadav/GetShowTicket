const appRoutes = {
  home: "/",
  aboutUs: "/about-us",
  contactUs: "/contact-us",
  events: "/events",
  eventDetails: (eventName: string, id: number) =>
    `/events/${eventName.replaceAll(" ", "-")}/${id}/`,
};

export default appRoutes;

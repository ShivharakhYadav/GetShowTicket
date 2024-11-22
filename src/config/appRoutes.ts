const appRoutes = {
  home: "/",
  aboutUs: "/about-us",
  contactUs: "/contact-us",
  events: "/events",
  login: "/login",
  eventDetails: (eventName: string, id: string) =>
    `/events/${eventName.replaceAll(" ", "-")}/${id}/`,
};

export default appRoutes;

const appRoutes = {
  home: "/",
  aboutUs: "/about-us",
  contactUs: "/contact-us",
  events: "/events",
  login: "/login",
  eventDetails: (eventName: string, id: number) =>
    `/events/${eventName.replaceAll(" ", "-")}/${id}/`,
};

export default appRoutes;

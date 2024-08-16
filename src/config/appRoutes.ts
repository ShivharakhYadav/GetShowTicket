const appRoutes = {
  home: "/",
  showDetail: (showName: string, id: number) =>
    `/shows/${showName.replaceAll(" ", "-")}/${id}/`,
};

export default appRoutes;

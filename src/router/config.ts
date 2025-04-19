const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/basic-services", "/basic-services"],
    exact: true,
    component: "BasicServices",
  },
  {
    path: ["/special-services", "/special-services"],
    exact: true,
    component: "SpecialServices",
  },
  {
    path: ["/products", "/products"],
    exact: true,
    component: "Products",
  },
];

export default routes;

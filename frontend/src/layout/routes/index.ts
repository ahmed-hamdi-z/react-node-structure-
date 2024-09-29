import useRoute from "@/hooks/useRoute";

import About from "@/pages/about";
import Home from "@/pages/home";

const { createRoutesArray } = useRoute();

// Assuming RouteObject requires 'name' and 'roles'
export const routes = createRoutesArray([
  {
    path: "/",
    element: Home, // Your component to render for this route
    name: "Home",  // Add 'name' property
    roles: ["user", "admin"],  // Add 'roles' property (example)
  },
  {
    path: "/about",
    element: About,
    name: "About",
    roles: ["user", "admin"],  // Example roles
  },
]);

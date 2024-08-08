import { route } from "quasar/wrappers";
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import routes from "./routes";
import { useAuthStore } from "../stores/data-store";

export default route(function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

    const isAuthenticated = authStore.isAuthenticated;
    const userRole = authStore.userRole;

    if (to.meta && to.meta.requiresAuth && !isAuthenticated) {
      // If the route requires authentication and the user is not authenticated, redirect to the login page
      next("/login");
    } else if (
      to.meta &&
      to.meta.roles &&
      Array.isArray(to.meta.roles) &&
      !to.meta.roles.includes(userRole)
    ) {
      // If the route specifies allowed roles and the user does not have the appropriate role, redirect to the access denied page
      next("/access-denied");
    } else if (to.path === "/" && isAuthenticated) {
      // If the route is the home page and the user is already authenticated, redirect to the main page or the desired route
      next("/home");
    } else {
      next();
    }
  });

  return router;
});

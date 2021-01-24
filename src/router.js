import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      meta: { auth: true },
      component: () => import("./views/Home")
    },

    {
      path: "/auth",
      name: "auth",
      meta: { auth: false },
      component: () => import("./views/Auth")
    },
    {
      path: "/projects",
      name: "projects",
      meta: { auth: true },
      component: () => import("./views/Projects")
    }
  ]
});

router.beforeEach((to, from, next) => {
  const token = store.state.auth.token;
  const requiredAuth = to.matched.some(record => record.meta.auth);
  if (requiredAuth && !token) {
    next("/auth?message=login");
  } else if (!requiredAuth && token) {
    next("/?message=isAuth");
  } else {
    next();
  }
});

export default router;

import { createWebHistory, createRouter } from "vue-router";

import UserLayout from "../layouts/user/UserLayout.vue";
import RegisterView from "../pages/auth/RegisterView.vue";
import LoginView from "../pages/auth/LoginView.vue";
import HomeView from "../pages/admin/HomeView.vue";
const routes = [
  {
    path: "/",
    component: UserLayout,
    children: [
      {
        path: "",
        name: "Login",
        component: LoginView,
      },
      {
        path: "login",
        name: "LoginView",
        component: LoginView,
      },
      {
        path: "register",
        name: "RegisterView",
        component: RegisterView,
      },
    ],
  },
  {
    path: "/admin",
    name: "AdminView",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("jwt");
  if (to.path.startsWith("/admin") && !token) {
    return next("/login");
  }
  next();
});

export default router;

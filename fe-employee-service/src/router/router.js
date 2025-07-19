import { createWebHistory, createRouter } from "vue-router";

import UserLayout from "../layouts/user/UserLayout.vue";
import RegisterView from "../pages/auth/RegisterView.vue";
import LoginView from "../pages/auth/LoginView.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

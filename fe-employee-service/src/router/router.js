import { createWebHistory, createRouter } from "vue-router";

import UserLayout from "../layouts/user/UserLayout.vue";
import RegisterView from "../pages/auth/RegisterView.vue";
import LoginView from "../pages/auth/LoginView.vue";
import AdminLayout from "../layouts/authenticated/AdminLayout.vue";
import HomeView from "../pages/admin/home/HomeView.vue";
import EmployeeLayout from "../layouts/authenticated/EmployeeLayout.vue";
import EmployeeView from "../pages/admin/employee/EmployeeView.vue";
import EmployeeCreate from "../pages/admin/employee/EmployeeCreate.vue";
import EmployeeEdit from "../pages/admin/employee/EmployeeEdit.vue";
import EmployeeDetail from "../pages/admin/employee/EmployeeDetail.vue";
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
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "HomeView",
        component: HomeView,
      },
      {
        path: "employees",
        component: EmployeeLayout,
        children: [
          {
            path: "",
            component: EmployeeView,
          },
          {
            path: "create",
            component: EmployeeCreate,
          },
          {
            path: "edit",
            component: EmployeeEdit,
          },
          {
            path: "detail",
            component: EmployeeDetail,
          },
        ],
      },
    ],
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

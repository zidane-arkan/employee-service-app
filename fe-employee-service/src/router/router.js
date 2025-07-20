import { createWebHistory, createRouter } from "vue-router";

import UserLayout from "../layouts/user/UserLayout.vue";
import RegisterView from "../pages/auth/RegisterView.vue";
import LoginView from "../pages/auth/LoginView.vue";
import AdminLayout from "../layouts/authenticated/AdminLayout.vue";
import HomeView from "../pages/admin/home/HomeView.vue";
// EMPLOYEE
import EmployeeLayout from "../layouts/authenticated/EmployeeLayout.vue";
import EmployeeView from "../pages/admin/employee/EmployeeView.vue";
import EmployeeCreate from "../pages/admin/employee/EmployeeCreate.vue";
import EmployeeEdit from "../pages/admin/employee/EmployeeEdit.vue";
import EmployeeDetail from "../pages/admin/employee/EmployeeDetail.vue";
// DIVISION
import DivisionLayout from "../layouts/authenticated/DivisionLayout.vue";
import DivisionView from "../pages/admin/division/DivisionView.vue";
import DivisionCreate from "../pages/admin/division/DivisionCreate.vue";
import DivisionEdit from "../pages/admin/division/DivisionEdit.vue";
import DivisionDetail from "../pages/admin/division/DivisionDetail.vue";
// POSITION
import PositionLayout from "../layouts/authenticated/PositionLayout.vue";
import PositionView from "../pages/admin/position/PositionView.vue";
import PositionCreate from "../pages/admin/position/PositionCreate.vue";
import PositionEdit from "../pages/admin/position/PositionEdit.vue";
import PositionDetail from "../pages/admin/position/PositionDetail.vue";

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
      {
        path: "divisions",
        component: DivisionLayout,
        children: [
          {
            path: "",
            component: DivisionView,
          },
          {
            path: "create",
            component: DivisionCreate,
          },
          {
            path: "edit",
            component: DivisionEdit,
          },
          {
            path: "detail",
            component: DivisionDetail,
          },
        ],
      },
      {
        path: "positions",
        component: PositionLayout,
        children: [
          {
            path: "",
            component: PositionView,
          },
          {
            path: "create",
            component: PositionCreate,
          },
          {
            path: "edit",
            component: PositionEdit,
          },
          {
            path: "detail",
            component: PositionDetail,
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

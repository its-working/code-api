import { createWebHistory, createRouter } from "vue-router";

import homeView from "../views/Home.vue";
import apiHubView from "../views/ApiHub.vue";
import aboutView from "../views/About.vue";
import contactView from "../views/Contact.vue";
import loginView from "../views/Login.vue";
import registerView from "../views/Register.vue";
import codeApi from "../views/CodeApi.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: homeView,
  },
  {
    path: "/api-hub",
    name: "Api-Hub",
    component: apiHubView,
  },
  {
    path: "/about",
    name: "About",
    component: aboutView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: contactView,
  },
  {
    path: "/login",
    name: "Login",
    component: loginView,
  },
  {
    path: "/register",
    name: "Register",
    component: registerView,
  },
  {
    path: "/api-hub/CodeApi",
    name: "CodeApi",
    component: codeApi,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
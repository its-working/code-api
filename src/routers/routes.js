import { createWebHistory, createRouter } from "vue-router";

import homeView from "../views/Home.vue";
import apiHubView from "../views/ApiHub.vue";
import aboutView from "../views/About.vue";
import contactView from "../views/Contact.vue";
import loginView from "../views/Login.vue";
import registerView from "../views/Register.vue";
import codeApi from "../views/CodeApi.vue";
import MyApisView from "../views/MyApis.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: homeView,
  },
  {
    path: "/api-hub",
    name: "apiHub",
    component: apiHubView,
  },
  {
    path: "/about",
    name: "about",
    component: aboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: contactView,
  },
  {
    path: "/login",
    name: "login",
    component: loginView,
  },
  {
    path: "/register",
    name: "register",
    component: registerView,
  },
  {
    path: "/api-hub/CodeApi",
    name: "codeApi",
    component: codeApi,
  },
  {
    path: "/My-Apis",
    name: "MyApis",
    component: MyApisView,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
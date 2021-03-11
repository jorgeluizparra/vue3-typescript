import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Pages
import Home from "../pages/Home.vue";
import PurchasingPage from "../pages/PurchasingPage.vue";
import SalesPage from "../pages/SalesPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/purchasing",
    name: "Purchasing Page",
    component: PurchasingPage
  },
  {
    path: "/sales",
    name: "Sales Page",
    component: SalesPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

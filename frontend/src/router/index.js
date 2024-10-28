import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/HomePage.vue";
import Dashboard from "../pages/UserDashboard.vue";
import ResearchDetail from "../pages/ResearchDetail.vue";
import SubmitResearch from "../pages/SubmitResearch.vue";
import Login from "../pages/LoginPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/dashboard", component: Dashboard },
  { path: "/research/:id", component: ResearchDetail, props: true },
  { path: "/submit", component: SubmitResearch },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

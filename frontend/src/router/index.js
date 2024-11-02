import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/HomePage.vue";
import Dashboard from "../pages/UserDashboard.vue";
import ResearchDetail from "../pages/ResearchDetail.vue";
import SubmitResearch from "../pages/SubmitResearch.vue";
import Login from "../pages/LoginPage.vue";
import Register from "../pages/RegisterPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/dashboard", component: Dashboard },
  { path: "/research/:id", component: ResearchDetail, props: true },
  { path: "/submit", component: SubmitResearch },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

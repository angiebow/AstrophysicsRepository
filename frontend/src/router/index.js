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
import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/components/HomePage.vue";
import UserDashboard from "@/components/UserDashboard.vue";
import ResearchSubmissionForm from "@/components/ResearchSubmissionForm.vue";
import ResearchDetailPage from "@/components/ResearchDetailPage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage },
  { path: "/dashboard", component: UserDashboard },
  { path: "/submit", component: ResearchSubmissionForm },
  { path: "/research/:id", component: ResearchDetailPage },
];

const router = new VueRouter({
  routes,
});

export default router;
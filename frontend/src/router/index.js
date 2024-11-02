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
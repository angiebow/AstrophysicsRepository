// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import UserDashboard from '@/components/UserDashboard.vue';
import ResearchSubmissionForm from '@/components/ResearchSubmissionForm.vue';
import ResearchDetailPage from '@/components/ResearchDetailPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: HomePage },
    { path: '/dashboard', component: UserDashboard },
    { path: '/submit', component: ResearchSubmissionForm },
    { path: '/research/:id', component: ResearchDetailPage },
  ],
});
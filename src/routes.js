import { createRouter, createWebHistory } from 'vue-router'

import Home from './screens/Home.vue';
import Projects from './screens/Projects.vue';

const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/projects', name: 'Projects', component: Projects}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

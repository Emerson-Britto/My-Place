import { createRouter, createWebHistory } from 'vue-router'

import Home from './screens/Home.vue';
import Projects from './screens/Projects.vue';
import About from './screens/About.vue';

const routes = [
    { path: '/home', name: 'Home', component: Home},
    { path: '/projects', name: 'Projects', component: Projects},
    { path: '/about', name: 'About', component: About}
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Detail from '../views/Detail.vue';
import Supprimer from '../views/Supprimer.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/supprimer/:id',
    name: 'Supprimer',
    component: Supprimer,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

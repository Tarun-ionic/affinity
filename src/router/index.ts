import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Inbox from '../views/Inbox.vue';
import Feed from '../views/Feed.vue';
import Faq from '../views/FAQ.vue';
import Donations from '../views/Donations.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: Inbox
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: Faq
  },
  {
    path: '/donate',
    name: 'Donations',
    component: Donations
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/dashboard/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: () => import(/* webpackChunkName: "tickets" */ '@/views/tickets/Tickets.vue'),
  },
  {
    path: '/live-chat',
    name: 'Live Chat',
    component: () => import(/* webpackChunkName: "live-chat" */ '@/views/live-chat/LiveChat.vue'),
  },
  {
    path: '/shop/analytics',
    name: 'Analytics',
    component: () => import(/* webpackChunkName: "shop-analytics" */ '@/views/shop/analytics/ShopAnalytics.vue'),
  },
  {
    path: '/shop/customers',
    name: 'Customers',
    component: () => import(/* webpackChunkName: "shop-customers" */ '@/views/shop/customers/ShopCustomers.vue'),
  },
  {
    path: '/shop/inventory',
    name: 'Inventory',
    component: () => import(/* webpackChunkName: "shop-inventory" */ '@/views/shop/inventory/ShopInventory.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

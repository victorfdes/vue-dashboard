import NavigationItem from '@/types/NavigationItem';

export const navItems = [
  new NavigationItem({
    title: 'Dashboard',
    icon: 'mdi-chart-line',
    route: '/',
  }),

  new NavigationItem({
    title: 'Tickets',
    icon: 'mdi-email-outline',
    route: '/tickets',
  }),

  new NavigationItem({
    title: 'Live Chat',
    icon: 'mdi-message-outline',
    route: '/live-chat',
  }),

  new NavigationItem({
    title: 'Shop',
    icon: 'mdi-cart-outline',
    children: [
      new NavigationItem({
        title: 'Inventory',
        route: '/shop/inventory',
      }),
      new NavigationItem({
        title: 'Analytics',
        route: '/shop/analytics',
      }),
      new NavigationItem({
        title: 'Customers',
        route: '/shop/customers',
      }),
    ],
  }),
];

export const a = 'a';

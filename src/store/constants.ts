import NavigationItem from '@/types/NavigationItem';

export const navItems = [
  new NavigationItem({
    title: 'Email',
    icon: 'mdi-email-outline',
  }),

  new NavigationItem({
    title: 'Chat',
    icon: 'mdi-message-outline',
  }),

  new NavigationItem({
    title: 'Ecommerce',
    icon: 'mdi-cart-outline',
    children: [
      new NavigationItem({
        title: 'Shop',
      }),
      new NavigationItem({
        title: 'Cart',
      }),
      new NavigationItem({
        title: 'Checkout',
      }),
      new NavigationItem({
        title: 'Cards',
      }),
    ],
  }),
];

export const a = 'a';

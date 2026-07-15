export type Navigation = {
  label: string;
  href: string;
};

export type NavigationCta = Navigation & {
  isButton: boolean;
};

export const defaultNativations: Navigation[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    label: 'Benefits',
    href: '#benefits',
  },
  {
    label: 'History',
    href: '#history',
  },
  {
    label: 'Princing',
    href: '#pricing',
  },
];

export const defaultNavigationCtas: NavigationCta[] = [
  {
    label: 'Sign in',
    href: '/sign-in',
    isButton: false,
  },
  {
    label: 'Get started',
    href: '/sign-up',
    isButton: true,
  },
];

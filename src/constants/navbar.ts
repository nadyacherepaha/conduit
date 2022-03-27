export const routesForAuthUser = [
  {
    path: '/',
    title: 'Home',
    icon: '',
  },
  {
    path: '/editor',
    title: 'New Article',
    icon: '',
  },
  {
    path: '/settings',
    title: 'Settings',
    icon: '',
  },
  {
    path: '/profile/:username',
    component: 'Username',
    exact: false,
  },
];

export const routesForGuest = [
  {
    path: '/',
    title: 'Home',
    icon: '',
  },
  {
    path: '/login',
    title: 'Sign In',
    icon: '',
  },
  {
    path: '/register',
    title: 'Sign Up',
    icon: '',
  },
];

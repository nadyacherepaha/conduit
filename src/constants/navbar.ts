import { RoutesForAuthUser, RoutesForGuest } from './../types/navbarRoutes';
import {
  faUserAstronaut,
  faPenToSquare,
  faGear,
  faHouseUser,
} from '@fortawesome/free-solid-svg-icons';

export const homePath: string = '/';
export const editorPath: string = '/editor';
export const settingsPath: string = '/settings';
export const profilePath: string = '/profile/:username';
export const loginPath: string = '/login';
export const registerPath: string = '/register';

export const routesForAuthUser: RoutesForAuthUser[] = [
  {
    path: homePath,
    title: 'Home',
    icon: faHouseUser,
  },
  {
    path: editorPath,
    title: 'New Article',
    icon: faPenToSquare,
  },
  {
    path: settingsPath,
    title: 'Settings',
    icon: faGear,
  },
  {
    path: profilePath,
    title: 'Username',
    icon: faUserAstronaut,
  },
];

export const routesForGuest: RoutesForGuest[] = [
  {
    path: homePath,
    title: 'Home',
  },
  {
    path: loginPath,
    title: 'Sign In',
  },
  {
    path: registerPath,
    title: 'Sign Up',
  },
];

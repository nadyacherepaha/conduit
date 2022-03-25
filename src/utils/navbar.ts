import { routesForAuthUser, routesForGuest } from '../constants/navbar';

const getLinksForNavbar = (isAuthUser: boolean) =>
  isAuthUser ? routesForAuthUser : routesForGuest;

export default getLinksForNavbar;

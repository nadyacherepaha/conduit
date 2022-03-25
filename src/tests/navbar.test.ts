import getLinksForNavbar from '../utils/navbar';
import { routesForAuthUser, routesForGuest } from '../constants/navbar';

describe('Navigation menu', () => {
  const isUserAuth = true;

  it('should display links for auth user', () => {
    expect(getLinksForNavbar(isUserAuth)).toEqual(routesForAuthUser);
  });
  it('should display links for guest', () => {
    expect(getLinksForNavbar(!isUserAuth)).toEqual(routesForGuest);
  });
});

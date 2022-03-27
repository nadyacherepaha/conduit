import getLinksForNavbar from '../src/utils/navbar';
import { routesForAuthUser, routesForGuest } from '../src/constants/navbar';

describe('Navigation menu', () => {
  const isUserAuth = true;

  it('should display links for auth user', () => {
    expect(getLinksForNavbar(isUserAuth)).toEqual(routesForAuthUser);
  });
  it('should display links for guest', () => {
    expect(getLinksForNavbar(!isUserAuth)).toEqual(routesForGuest);
  });
});

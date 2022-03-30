import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface RoutesForAuthUser {
  path: string;
  title: string;
  icon: IconDefinition;
}

export interface RoutesForGuest {
  path: string;
  title: string;
}

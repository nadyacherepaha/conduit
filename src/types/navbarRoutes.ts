import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IRoutesForAuthUser {
  path: string;
  title: string;
  icon: IconDefinition;
}

export interface IRoutesForGuest {
  path: string;
  title: string;
}

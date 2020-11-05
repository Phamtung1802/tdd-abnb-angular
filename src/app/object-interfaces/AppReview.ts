import { AppProperty } from './AppProperty';
import { AppUser } from './AppUser';

export interface AppReview{
  id: number;
  comment: string;
  rating: number;
  date: string;
  appUser: AppUser;
  appProperty: AppProperty;
  //
}

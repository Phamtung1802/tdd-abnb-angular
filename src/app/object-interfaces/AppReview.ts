import { AppProperty } from './AppProperty';
import { AppUser } from './AppUser';

export interface AppReview{
  id: number;
  comment: string;
  rating: number;
  date: String;
  appUser: AppUser;
  appProperty: AppProperty;
  //
}

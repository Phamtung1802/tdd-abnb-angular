import { AppProperty } from './AppProperty';
import { AppReview } from './AppReview';
import { AppUser } from './AppUser';

export interface AppBooking{
  id?: number;
  checkinDate?: string;
  checkoutDate?: string;
  appUser?: AppUser;
  appProperty?: AppProperty;
}

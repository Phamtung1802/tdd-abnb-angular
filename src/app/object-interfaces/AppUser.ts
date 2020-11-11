import { AppBooking } from './AppBooking';
import { AppInvoice } from './AppInvoice';
import { AppProperty } from './AppProperty';
import { AppReview } from './AppReview';
import { AppRole } from './AppRole';

export interface AppUser{
  id?: number;
  name?: string;
  realName?: string;
  address?: string;
  password?: string;
  avatar?: string;
  email?: string;
  phoneNumber?: string;
  appRole?: AppRole;
  appReviews?: AppReview[];
  appBookings?: AppBooking[];
  appInvoices?: AppInvoice[];
  appProperties?: AppProperty[];
}

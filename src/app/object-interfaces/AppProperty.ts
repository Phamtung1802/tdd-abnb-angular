import { AppBooking } from './AppBooking';
import { AppImage } from './AppImage';
import { AppInvoice } from './AppInvoice';
import { AppReview } from './AppReview';
import { AppUser } from './AppUser';

export interface AppProperty{
  id?: number;
  name?: string;
  status?: string;
  type?: string;
  bedroomNum?: number;
  bathroomNum?: number;
  address?: string;
  description?: string;
  longitude?: number;
  latitude?: number;
  pricePerDay?: number;
  appUser?: AppUser;
  appInvoiceSet?: Set<AppInvoice>;
  appBookingSet?: Set<AppBooking>;
  appReviews?: AppReview[];
  appImages?: AppImage[];
}

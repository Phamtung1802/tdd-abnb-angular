import { AppProperty } from './AppProperty';
import { AppReview } from './AppReview';
import { AppUser } from './AppUser';

export interface AppInvoice{
  id: number;
  checkinDate: string;
  checkoutDate: string;
  invoiceDate: string;
  appUser: AppUser;
  appPropertySet: Set<AppProperty>;
}

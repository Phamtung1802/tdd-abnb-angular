import { AppProperty } from './AppProperty';
import { AppReview } from './AppReview';
import { AppUser } from './AppUser';

export interface AppImage{
  id: number;
  URL: string;
  appProperty: AppProperty;
}

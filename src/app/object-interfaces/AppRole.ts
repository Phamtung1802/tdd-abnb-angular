import { AppUser } from './AppUser';

export interface AppRole{
  id: number;
  name?: string;
  appUsers?: AppUser[];
}

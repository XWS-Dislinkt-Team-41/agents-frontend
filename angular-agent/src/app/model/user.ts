import { Role } from './role';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  role: Role;
  token: string;
}

export const emptyUser = {
  id: 0,
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  role: Role.User,
  token: '',
};

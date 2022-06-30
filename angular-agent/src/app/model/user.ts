import { IRole, emptyRole } from './role';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  role: IRole;
  token: string;
}

export const emptyUser = {
  id: 0,
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  role: emptyRole,
  token: '',
};

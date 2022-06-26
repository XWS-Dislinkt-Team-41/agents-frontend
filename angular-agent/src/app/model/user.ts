import { IRole } from "./role";

export interface IUser {
  id: number;
  firstName : string;
  lastName: string;
  username: string;
  password: string;
  role: IRole;
}

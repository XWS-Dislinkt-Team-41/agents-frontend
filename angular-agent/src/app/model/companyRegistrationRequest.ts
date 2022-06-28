import { RequestStatus } from 'src/app/model/requestStatus';

export interface ICompanyRegistrationRequest {
  id: number;
  status : RequestStatus;
  userId: number;
}

import { RequestStatus } from 'src/app/model/requestStatus';

export interface ICompanyRegistrationRequest {
  id: number;
  name: string;
  status: RequestStatus;
  userId: number;
  contactInformation: string;
  activityDescription: string;
}

export const emptyCompanyRegistrationRequest: ICompanyRegistrationRequest = {
  id: 0,
  name: '',
  status: RequestStatus.Waiting,
  userId: 0,
  contactInformation: '',
  activityDescription: '',
};

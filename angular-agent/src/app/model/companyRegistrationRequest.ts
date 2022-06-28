import { RequestStatus } from 'src/app/model/requestStatus';

export interface ICompanyRegistrationRequest {
  id: number;
  status: RequestStatus;
  userId: number;
  contactInformation: string;
  activityDescription: string;
}

export const emptyCompanyRegistrationRequest: ICompanyRegistrationRequest = {
  id: 0,
  status: RequestStatus.Waiting,
  userId: 0,
  contactInformation: '',
  activityDescription: '',
};

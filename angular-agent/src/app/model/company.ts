import { IJobPositionPayment } from './jobPositionPayment';
import { IInterview } from './interview';
import { IComment } from './comment';
export interface ICompany {
  id: number;
  name: string;
  grade: number;
  ownerId: number;
  usersGrade: number[];
  image: string;
  contactInformation: string;
  activityDescription: string;
  comments: IComment[];
  interviews: IInterview[];
  jobPositionsPayments: IJobPositionPayment[];
}

export const emptyCompany = {
  id: 0,
  name: 'Company',
  ownerId: 0,
  grade: 0,
  usersGrade: [],
  image: '',
  contactInformation: '',
  activityDescription: '',
  comments: [],
  interviews: [],
  jobPositionsPayments: [],
};

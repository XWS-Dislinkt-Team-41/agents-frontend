import {
  IJobPositionPayment,
  emptyJobPositionPayment,
} from './jobPositionPayment';

export interface IPayment {
  companyId: number;
  userId: number;
  jobPosition: string;
  price: number;
  jobPositionPayment: IJobPositionPayment;
}

export const emptyPayment = {
  companyId: 0,
  userId: 0,
  jobPosition: '',
  price: 0,
  jobPositionPayment: emptyJobPositionPayment,
};

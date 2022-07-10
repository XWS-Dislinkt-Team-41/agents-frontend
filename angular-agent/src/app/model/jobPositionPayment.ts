export interface IJobPositionPayment {
  companyId: number;
  nameOfPosition: string;
  price: number;
  jobPosition: string;
  average: number;
}

export const emptyJobPositionPayment = {
  companyId: 0,
  nameOfPosition: '',
  price: 0,
  jobPosition: '',
  average: 0,
};

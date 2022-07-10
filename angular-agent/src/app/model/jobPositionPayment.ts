export interface IJobPositionPayment {
  companyId: number;
  nameOfPosition: string;
  price: number;
}

export const emptyJobPositionPayment = {
  companyId: 0,
  nameOfPosition: '',
  price: 0,
};

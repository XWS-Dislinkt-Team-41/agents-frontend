export interface ICompany {
  Name: string;
  Grade: number;
  UsersGrade: number[];
}

export const emptyCompany = {
  Name: 'Company',
  Grade: 0,
  UsersGrade: [],
};

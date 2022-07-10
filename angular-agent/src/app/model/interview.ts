export interface IInterview {
  interviewedCompanyId: number;
  hR: string;
  technical: string;
  date: Date;
}

export const emptyInterview = {
  interviewedCompanyId: 0,
  hR: '',
  technical: '',
  date: new Date(),
};

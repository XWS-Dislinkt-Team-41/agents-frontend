export interface IInterview {
  interviewedCompanyId: number;
  hr: string;
  technical: string;
  date: Date;
}

export const emptyInterview = {
  interviewedCompanyId: 0,
  hr: '',
  technical: '',
  date: new Date(),
};

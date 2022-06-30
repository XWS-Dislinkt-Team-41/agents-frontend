export interface IJobOffer {
  id: number;
  companyId: number;
  name: string;
  position: string;
  seniority: string;
  description: string;
  skills: ISkill[];
  published: boolean;
}

export interface ISkill {
  id: number;
  name: string;
}

export const emptyJobOffer: IJobOffer = {
  id: 0,
  companyId: 0,
  name: '',
  description: '',
  position: '',
  seniority: '',
  skills: [],
  published: false,
};

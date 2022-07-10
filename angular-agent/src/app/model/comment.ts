export interface IComment {
  reviewedJobId: number;
  userId: number;
  jobPosition: string;
  positiveImpression: string;
  negativeImpression: string;
  projectsImpression: string;
  date: Date;
  userEngagement: string;
}

export const emptyComment = {
  reviewedJobId: 0,
  userId: 0,
  jobPosition: '',
  positiveImpression: '',
  negativeImpression: '',
  projectsImpression: '',
  date: new Date(),
  userEngagement: '',
};

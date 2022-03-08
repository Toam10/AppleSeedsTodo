export interface I_Task {
  _id: string;
  idProject: string;
  name: string;
  description: string;
  createdAt: Date;
  urgency: number;
  status: number;
  comments: [
    {
      _id: string;
      comment: string;
    }
  ];
}

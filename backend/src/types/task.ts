import { Document } from 'mongoose';
import { Schema } from 'mongoose';

export interface TASK extends Document {
  idProject: Schema.Types.ObjectId;
  name: string;
  description: string;
  createdAt: Date;
  urgency: number;
  status: number;
  comments: [string];
}

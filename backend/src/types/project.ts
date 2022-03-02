import { Document } from 'mongoose';
import { Task } from './task';

export interface PROJECT extends Document {
  name: string;
  description: string;
  goal: string;
  labels: string[];
  tasks: Task[];
}

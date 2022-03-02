import { PROJECT } from './../types/project';
import { TASK } from './../types/task';
import { model, Schema } from 'mongoose';

const taskSchema: Schema = new Schema(
  {
    idProject: {
      type: Schema.Types.ObjectId,
    },
    name: {
      type: String,
    },

    description: {
      type: String,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    urgency: {
      type: Number,
      default: 0,
    },

    status: {
      type: Number,
      default: -1,
    },
    comments: [
      {
        comment: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const projectSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    goal: {
      type: String,
    },

    labels: {
      type: [String],
      default: ['TODO', 'PROCESS', 'DONE'],
    },
    tasks: [taskSchema],
  },
  { timestamps: true }
);
const Task = model<TASK>('Task', taskSchema);
const Project = model<PROJECT>('Project', projectSchema);
export { Task, Project };

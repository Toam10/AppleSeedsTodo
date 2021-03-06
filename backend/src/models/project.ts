import { PROJECT } from '../types/project';
import { model, Schema } from 'mongoose';

const taskSchema: Schema = new Schema(
  {
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

const Project = model<PROJECT>('Project', projectSchema);

export { Project };

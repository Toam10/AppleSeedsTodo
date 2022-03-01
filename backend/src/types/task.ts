import { Document } from "mongoose"

export interface TASK extends Document {
  name: string
  description: string
  createdAt: Date
  urgency: Number
  status: Number
  comments: [string]
}

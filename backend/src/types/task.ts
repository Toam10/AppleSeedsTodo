import { Document } from "mongoose"

export interface TASK extends Document {
  name: string
  description: string
  createdAt: Date
  urgency: number
  status: number
  comments: [string]
}

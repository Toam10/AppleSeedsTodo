import { Document } from "mongoose"
import { TASK } from "./task"

export interface PROJECT extends Document {
  name: string
  description: string
  goal: string
  status: boolean
  labels: [string]
  tasks:[TASK]
}

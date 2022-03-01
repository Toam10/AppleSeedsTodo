import { ITodo } from "./../types/project"
import { model, Schema } from "mongoose"

const projectSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    goal: {
        type: String,
        required: true,
      },

    status: {
      type: Boolean,
      required: true,
    },
  },
  {timestamps: true}
)

export default model<ITodo>("Todo", projectSchema)

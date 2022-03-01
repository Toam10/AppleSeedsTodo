export type AddTaskType = 'ADD_TASK';
export type UpdateTaskType = 'UPDATE_TASK';

export type AddTaskPayload = string;
export type UpdateTaskPayload = { name: string };

export type AllTypes = AddTaskType | UpdateTaskType;

export interface IAction {
  type: AllTypes;
  payload?: AddTaskPayload | UpdateTaskPayload;
}

import { AddTaskPayload, IAction, UpdateTaskPayload } from '../types/index.types';

export const addTask = (task: AddTaskPayload): IAction => ({
  type: 'ADD_TASK',
  payload: task,
});

export const updateTask = (task: UpdateTaskPayload): IAction => ({
  type: 'UPDATE_TASK',
  payload: task,
});

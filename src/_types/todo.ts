import {
  TODO_STATUS_ACTIVE,
  TODO_STATUS_DELETED,
  TODO_STATUS_COMPLETE,
} from "../_constants/todo";

export interface Todo {
  id: string;
  task: string;
  status:
    | typeof TODO_STATUS_ACTIVE
    | typeof TODO_STATUS_COMPLETE
    | typeof TODO_STATUS_DELETED;
  isActive: boolean;
  isComplete: boolean;
  isDeleted: boolean;
  createdAtUtc: string;
  updatedAtUtc: string | null;
  deletedAtUtc: string | null;
}

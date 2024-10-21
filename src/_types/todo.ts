import { TODO_STATUS_ACTIVE } from "../_constants/todo";

export interface Todo {
  id: string;
  task: string;
  status: typeof TODO_STATUS_ACTIVE;
  isActive: boolean;
  isComplete: boolean;
  isDeleted: boolean;
  createdAtUtc: Date;
  updatedAtUtc: Date | null;
  deletedAtUtc: Date | null;
}

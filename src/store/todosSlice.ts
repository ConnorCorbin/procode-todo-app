import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Todo } from "../_types/todo";
import { TODO_STATUS_ACTIVE, TODO_STATUS_DELETED } from "../_constants/todo";

import { RootState } from "./store";
import { getNowUtc } from "../_utils/getNowUtc";

const initialState: Todo[] = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ task: string }>) => {
      state.unshift({
        id: (state.length + 1).toString(),
        task: action.payload.task,
        status: TODO_STATUS_ACTIVE,
        isActive: true,
        isComplete: false,
        isDeleted: false,
        createdAtUtc: getNowUtc(),
        updatedAtUtc: null,
        deletedAtUtc: null,
      });
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      for (const todo of state) {
        if (todo.id === action.payload.id) {
          const nowUtc = getNowUtc();

          todo.status = TODO_STATUS_DELETED;
          todo.isActive = false;
          todo.isDeleted = true;
          todo.updatedAtUtc = nowUtc;
          todo.deletedAtUtc = nowUtc;

          continue;
        }
      }
    },
    toggleTodo: (state, action: PayloadAction<{ id: string }>) => {
      for (const todo of state) {
        if (todo.id === action.payload.id) {
          todo.status = TODO_STATUS_DELETED;
          todo.isActive = false;
          todo.isComplete = !todo.isComplete;
          todo.updatedAtUtc = getNowUtc();

          continue;
        }
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;

export const selectVisibleTodos = createSelector(
  [(state: RootState) => state.todos],
  (todos) => todos.filter((todo) => !todo.isDeleted)
);

export const todosReducer = todosSlice.reducer;

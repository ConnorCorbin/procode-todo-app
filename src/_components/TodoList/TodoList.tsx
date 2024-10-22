import { useDispatch } from "react-redux";

import { useAppSelector } from "../../_store/hooks";
import {
  deleteTodo,
  selectVisibleTodos,
  toggleTodo,
} from "../../_store/todosSlice";

import { TodoListItem } from "../TodoListItem";

export function TodoList() {
  const visibleTodos = useAppSelector(selectVisibleTodos);

  const dispatch = useDispatch();

  if (visibleTodos.length === 0) {
    return <p className="p-2.5 italic">No todos yet. Add your first todo!</p>;
  }

  const onTodoToggle = (todoId: string) => {
    dispatch(toggleTodo({ id: todoId }));
  };

  const onTodoDelete = (todoId: string) => {
    dispatch(deleteTodo({ id: todoId }));
  };

  return (
    <ul className="space-y-1">
      {visibleTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={{
            id: todo.id,
            task: todo.task,
            isComplete: todo.isComplete,
          }}
          onTodoToggle={onTodoToggle}
          onTodoDelete={onTodoDelete}
        />
      ))}
    </ul>
  );
}

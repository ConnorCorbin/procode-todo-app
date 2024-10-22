import { ErrorBoundary } from "react-error-boundary";

import { TodoForm } from "./_components/TodoForm";
import { TodoListItem } from "./_components/TodoListItem";
import { Paper } from "./components/Paper";
import { useAppSelector } from "./store/hooks";
import { deleteTodo, selectVisibleTodos, toggleTodo } from "./store/todosSlice";
import { useDispatch } from "react-redux";

export function App() {
  const todos = useAppSelector(selectVisibleTodos);

  const dispatch = useDispatch();

  const onTodoToggle = (todoId: string) => {
    dispatch(toggleTodo({ id: todoId }));
  };

  const onTodoDelete = (todoId: string) => {
    dispatch(deleteTodo({ id: todoId }));
  };

  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-3xl space-y-2">
        <Paper>
          {/* TODO: extract out into a component, style and add ability to reset error boundary */}
          <ErrorBoundary fallback={<div>Something went wrong.</div>}>
            <TodoForm />
          </ErrorBoundary>
        </Paper>
        <Paper>
          {/* TODO: extract out into a component, style and add ability to reset error boundary */}
          <ErrorBoundary fallback={<div>Something went wrong.</div>}>
            {todos.length === 0 ? (
              <p className="p-2.5 italic">No todos yet. Add your first todo!</p>
            ) : (
              <ul className="space-y-1">
                {todos.map((todoItem) => (
                  <TodoListItem
                    key={todoItem.id}
                    todo={{
                      id: todoItem.id,
                      task: todoItem.task,
                      isComplete: todoItem.isComplete,
                    }}
                    onTodoToggle={onTodoToggle}
                    onTodoDelete={onTodoDelete}
                  />
                ))}
              </ul>
            )}
          </ErrorBoundary>
        </Paper>
      </div>
    </div>
  );
}

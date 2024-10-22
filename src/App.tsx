import { ErrorBoundary } from "react-error-boundary";

import { Paper } from "../components/Paper";

import { TodoForm } from "./_components/TodoForm";
import { TodoList } from "./_components/TodoList";

export function App() {
  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-3xl space-y-2">
        <Paper>
          {/* TODO: extract out into a component, style and add ability to reset error boundary */}
          <ErrorBoundary fallback={<div>Something went wrong.</div>}>
            <TodoForm defaultValues={{ task: "" }} />
          </ErrorBoundary>
        </Paper>
        <Paper>
          {/* TODO: extract out into a component, style and add ability to reset error boundary */}
          <ErrorBoundary fallback={<div>Something went wrong.</div>}>
            <TodoList />
          </ErrorBoundary>
        </Paper>
      </div>
    </div>
  );
}

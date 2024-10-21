import { useId } from "react";
import { FormLabel } from "../../components/FormLabel";
import { Todo } from "../../_types/todo";
import { TodoListItemDeleteButton } from "../TodoListItemDeleteButton";
import { FormCheckbox } from "../../components/FormCheckbox";

export function TodoListItem({ todo }: TodoListItem) {
  const id = useId();

  return (
    <li className="flex items-center gap-2 p-2.5">
      <div className="flex">
        <FormCheckbox id={id} />
      </div>
      <FormLabel htmlFor={id}>{todo.task}</FormLabel>
      <div className="ml-auto flex">
        <TodoListItemDeleteButton />
      </div>
    </li>
  );
}

interface TodoListItem {
  todo: Pick<Todo, "task">;
}

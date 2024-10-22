import { useId } from "react";
import { FormLabel } from "../../components/FormLabel";
import { Todo } from "../../_types/todo";
import { FormCheckbox } from "../../components/FormCheckbox";
import { ButtonBase } from "../../components/ButtonBase";

import { TrashIcon } from "@heroicons/react/24/outline";

export function TodoListItem({
  todo,
  onTodoToggle,
  onTodoDelete,
}: TodoListItem) {
  const id = useId();

  return (
    <li className="flex items-center gap-2 p-2.5">
      <div className="flex">
        <FormCheckbox
          id={id}
          checked={todo.isComplete}
          onChange={() => onTodoToggle(todo.id)}
        />
      </div>
      <FormLabel htmlFor={id}>{todo.task}</FormLabel>
      <div className="ml-auto flex">
        <ButtonBase onClick={() => onTodoDelete(todo.id)}>
          <TrashIcon height={24} width={24} />
        </ButtonBase>
      </div>
    </li>
  );
}

interface TodoListItem {
  todo: Pick<Todo, "id" | "task" | "isComplete">;
  onTodoToggle: (todoId: string) => void;
  onTodoDelete: (todoId: string) => void;
}

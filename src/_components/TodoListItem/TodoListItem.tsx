import { useId } from "react";

import cx from "classix";

import { TrashIcon } from "@heroicons/react/24/outline";

import { FormLabel } from "../../../components/FormLabel";
import { FormCheckbox } from "../../../components/FormCheckbox";
import { ButtonBase } from "../../../components/ButtonBase";

import { Todo } from "../../_types/todo";

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
      <FormLabel htmlFor={id} className={cx(todo.isComplete && "opacity-25")}>
        {todo.task}
      </FormLabel>
      <div className="ml-auto flex">
        <ButtonBase
          onClick={() => onTodoDelete(todo.id)}
          aria-label="Delete todo item"
        >
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

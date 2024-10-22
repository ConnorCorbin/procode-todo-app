import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

import { FormTextField } from "../../../components/FormTextField";
import { FormErrorMessage } from "../FormErrorMessage";
import { FormLabel } from "../../../components/FormLabel";
import { FormField } from "../../../components/FormField";
import { ButtonBase } from "../../../components/ButtonBase";

import { useAppDispatch } from "../../_store/hooks";
import { addTodo } from "../../_store/todosSlice";

import { TodoFormSchema, todoFormSchema } from "./todoFormSchema";

export function TodoForm({ defaultValues }: TodoFormProps) {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    resolver: yupResolver(todoFormSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<TodoFormSchema> = (data) => {
    dispatch(addTodo({ task: data.task }));
    reset();
  };

  return (
    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <FormLabel>Todo item</FormLabel>
        <FormTextField
          placeholder="Add new task"
          endAdornment={
            <ButtonBase type="submit">
              <PlusCircleIcon
                height={24}
                width={24}
                aria-label="add new task"
              />
            </ButtonBase>
          }
          {...register("task")}
        />
        <FormErrorMessage<TodoFormSchema> errors={errors} name="task" />
      </FormField>
    </form>
  );
}

interface TodoFormProps {
  defaultValues: TodoFormSchema;
}

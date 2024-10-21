import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormTextField } from "../../components/FormTextField";
import { FormErrorMessage } from "../FormErrorMessage";
import { FormLabel } from "../../components/FormLabel";
import { TodoFormButtonSave } from "../TodoFormButtonSave";
import { FormField } from "../../components/FormField";

import { TodoFormSchema, todoFormSchema } from "./todoFormSchema";

export function TodoForm() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(todoFormSchema),
    defaultValues: {
      task: "",
    },
  });

  const onSubmit: SubmitHandler<TodoFormSchema> = (data) => {
    console.log("data", data);
  };

  return (
    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <FormLabel>Todo item</FormLabel>
        <FormTextField
          placeholder="Add new task"
          endAdornment={<TodoFormButtonSave />}
          {...register("task")}
        />
        <FormErrorMessage<TodoFormSchema> errors={errors} name="task" />
      </FormField>
    </form>
  );
}

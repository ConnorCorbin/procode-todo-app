import * as yup from "yup";

export const todoFormSchema = yup
  .object({
    task: yup
      .string()
      .trim()
      .max(25, "Task must not be longer than 25 characters.")
      .default("")
      .required("Please enter a task."),
  })
  .required();

export type TodoFormSchema = yup.InferType<typeof todoFormSchema>;

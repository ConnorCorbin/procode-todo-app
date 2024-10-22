import { forwardRef } from "react";

import { FormBaseInput, type FormBaseInputProps } from "../FormBaseInput";

export const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(
  function FormCheckbox(props, ref) {
    return <FormBaseInput ref={ref} type="checkbox" {...props} />;
  }
);

export interface FormCheckboxProps extends Omit<FormBaseInputProps, "type"> {}

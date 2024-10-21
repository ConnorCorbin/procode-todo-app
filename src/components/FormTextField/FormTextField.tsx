import { forwardRef } from "react";
import { FormBaseInput, FormBaseInputProps } from "../FormBaseInput";

export const FormTextField = forwardRef<HTMLInputElement, FormTextFieldProps>(
  function FormTextField(props, ref) {
    return (
      <FormBaseInput ref={ref} className="w-full" type="text" {...props} />
    );
  }
);

export interface FormTextFieldProps extends Omit<FormBaseInputProps, "type"> {
  isFull?: boolean;
}

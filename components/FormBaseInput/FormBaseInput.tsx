import { forwardRef, type ComponentPropsWithRef } from "react";

export const FormBaseInput = forwardRef<HTMLInputElement, FormBaseInputProps>(
  function FormbaseInput(props, ref) {
    return <input ref={ref} {...props} />;
  }
);

export interface FormBaseInputProps extends ComponentPropsWithRef<"input"> {}

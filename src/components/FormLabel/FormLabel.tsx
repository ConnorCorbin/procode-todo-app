import { ComponentPropsWithRef, forwardRef, PropsWithChildren } from "react";

export const FormLabel = forwardRef<
  HTMLLabelElement,
  PropsWithChildren<FormLabelProps>
>(function Formlabel({ children, ...props }, ref) {
  return (
    <label ref={ref} {...props}>
      {children}
    </label>
  );
});

export interface FormLabelProps extends ComponentPropsWithRef<"label"> {}
